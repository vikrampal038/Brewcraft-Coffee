import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthModal } from '../../Context/AuthContext';
import { useAuth } from '../../Hooks/useAuth';

const ProtectedRoute = ({ children }) => {
    const { isLoaded, isSignedIn } = useAuth();
    const { openLogin } = useAuthModal();
    const location = useLocation();
    const [hasOpenedModal, setHasOpenedModal] = useState(false);

    useEffect(() => {
        if (isLoaded && !isSignedIn && !hasOpenedModal) {
            openLogin(location.pathname);
            setHasOpenedModal(true);
        }
    }, [isLoaded, isSignedIn, location.pathname, openLogin, hasOpenedModal]);

    if (!isLoaded) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#FCF8F5]">
                <div className="w-16 h-16 border-4 border-[#D46C11] border-t-transparent rounded-full animate-spin mb-6"></div>
                <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-[#D46C11]/50">Authenticating Sanctuary</h3>
            </div>
        );
    }

    if (!isSignedIn) {
        // Return null to avoid redirecting. The useEffect will trigger the login modal.
        // This keeps the user on the current URL so they can continue after login.
        return null;
    }

    return children;
};

export default ProtectedRoute;
