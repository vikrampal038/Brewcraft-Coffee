import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Common/User/Navbar';
import Footer from '../Common/User/Footer';
import ScrollToTop from '../Common/User/ScrollToTop';
import FloatingScroll from '../Common/User/FloatingScroll';
import LoginModal from '../Components/User/Auth/LoginModal';

const LayoutWrapper = ({ children }) => {
    const location = useLocation();
    const isAdmin = location.pathname.startsWith('/admin');

    if (isAdmin) {
        return (
            <>
                <ScrollToTop />
                {children}
            </>
        );
    }

    return (
        <>
            <ScrollToTop />
            <Navbar />
            {children}
            <Footer />
            <FloatingScroll />
            <LoginModal />
        </>
    );
};

export default LayoutWrapper;
