import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Try to load cart from local storage on mount
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('brewcraft_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Update local storage whenever cart changes
    useEffect(() => {
        localStorage.setItem('brewcraft_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Add item to cart
    const addToCart = (product, quantity = 1, options = { grind: 'Whole Bean', roast: 'Light Roast' }) => {
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
                    ? parseFloat(product.price.replace('$', ''))
                    : product.price;

                // Add new item
                return [...prevItems, {
                    ...product,
                    price: numericPrice,
                    quantity: quantity,
                    grind: options.grind,
                    roast: options.roast
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
