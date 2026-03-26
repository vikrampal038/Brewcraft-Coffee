import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [authView, setAuthView] = useState('login'); // 'login' or 'register'
    const [redirectPath, setRedirectPath] = useState(null);

    const openLogin = (path = null) => {
        setAuthView('login');
        if (path) setRedirectPath(path);
        setLoginModalOpen(true);
    };

    const openRegister = (path = null) => {
        setAuthView('register');
        if (path) setRedirectPath(path);
        setLoginModalOpen(true);
    };

    const requireAuth = (path) => {
        setRedirectPath(path);
        setAuthView('login');
        setLoginModalOpen(true);
    };

    const clearRedirectPath = () => setRedirectPath(null);

    const closeAuthModal = () => {
        setLoginModalOpen(false);
        // Clear redirect after a small delay to prevent jumping before modal closes
        setTimeout(() => {
            setRedirectPath(null);
            setAuthView('login');
        }, 300);
    };

    return (
        <AuthContext.Provider value={{ 
            isLoginModalOpen, 
            authView, 
            setAuthView, 
            openLogin, 
            openRegister, 
            requireAuth,
            clearRedirectPath,
            closeAuthModal,
            redirectPath 
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthModal = () => useContext(AuthContext);
