import { useState, useEffect } from "react";
import api from "../lib/axios";
import { useNavigate } from "react-router-dom";

/**
 * Custom hook to unify authentication states and actions using custom backend.
 */
export const useAuth = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkAuth = () => {
            const isAuth = localStorage.getItem("isAuthenticated") === "true";
            const storedUser = localStorage.getItem("user");
            
            if (isAuth && storedUser) {
                setIsSignedIn(true);
                try {
                    const parsedUser = JSON.parse(storedUser);
                    // Match Clerk's user object structure for the UI
                    setUser({
                        ...parsedUser,
                        fullName: parsedUser.name || "User",
                        primaryEmailAddress: { emailAddress: parsedUser.email },
                        imageUrl: `https://ui-avatars.com/api/?name=${parsedUser.name || "User"}&background=random`
                    });
                } catch (e) {
                    setUser(null);
                }
            } else {
                setIsSignedIn(false);
                setUser(null);
            }
            setIsLoaded(true);
        };
        
        checkAuth();
    }, []);

    const signOut = async () => {
        // Technically we should clear the httpOnly cookie from backend too if there was a logout route,
        // but for frontend logic:
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("user");
        setIsSignedIn(false);
        setUser(null);
        await api.post("/auth/logout");
    };

    return {
        isLoaded,
        isSignedIn,
        user,
        signOut
    };
};
