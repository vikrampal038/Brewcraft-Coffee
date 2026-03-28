/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useAuthModal } from './AuthContext';

export const CartContext = createContext();

const USD_TO_INR = 91.93;

export const CartProvider = ({ children }) => {
    const { isSignedIn } = useUser();
    const { requireAuth } = useAuthModal();

    // Try to load cart from local storage on mount
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('brewcraft_cart');
        if (!savedCart) return [];

        try {
            const parsed = JSON.parse(savedCart);
            if (!Array.isArray(parsed)) return [];

            // One-time-ish migration: older carts stored USD numeric prices (~3-10). INR prices here are ~300+.
            return parsed.map((item) => {
                const raw = item?.price;
                const numeric = typeof raw === 'number'
                    ? raw
                    : parseFloat(String(raw || '').replace(/[^0-9.]/g, ''));

                if (!Number.isFinite(numeric)) return item;

                const looksLikeUsd = numeric > 0 && numeric < 100 && item?.currency !== 'INR';
                if (!looksLikeUsd) return item;

                const inr = Number((numeric * USD_TO_INR).toFixed(2));
                return { ...item, price: inr, currency: 'INR' };
            });
        } catch {
            return [];
        }
    });

    // Update local storage whenever cart changes
    useEffect(() => {
        localStorage.setItem('brewcraft_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Add item to cart
    const addToCart = (product, quantity = 1, options = { grind: 'Whole Bean', roast: 'Light Roast' }) => {
        if (!isSignedIn) {
            const path = typeof window !== 'undefined' ? window.location.pathname : null;
            requireAuth(path);
            return;
        }
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item => item.id === product.id && item.grind === options.grind && item.roast === options.roast);

            if (existingItemIndex !== -1) {
                // Item exists, update quantity
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += quantity;
                return updatedItems;
            } else {
                // Parse numeric price from string if necessary
                const numericPrice = typeof product.price === 'string'
                    ? parseFloat(product.price.replace(/[^0-9.]/g, ''))
                    : product.price;

                // Add new item
                return [...prevItems, {
                    ...product,
                    price: numericPrice,
                    quantity: quantity,
                    grind: options.grind,
                    roast: options.roast,
                    currency: 'INR'
                }];
            }
        });
    };

    // Remove item from cart
    const removeFromCart = (productId, grind, roast) => {
        setCartItems(prevItems => prevItems.filter(item => !(item.id === productId && item.grind === grind && item.roast === roast)));
    };

    // Update item quantity
    const updateQuantity = (productId, grind, roast, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(prevItems =>
            prevItems.map(item =>
                (item.id === productId && item.grind === grind && item.roast === roast)
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    // Clear cart completely
    const clearCart = () => {
        setCartItems([]);
    };

    // Get total items count
    const getCartCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    // Get subtotal
    const getCartSubtotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getCartCount,
            getCartSubtotal
        }}>
            {children}
        </CartContext.Provider>
    );
};
