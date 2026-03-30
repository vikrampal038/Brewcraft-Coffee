import { useState, useEffect } from "react";
import api from "../lib/axios";

/**
 * Custom hook to unify authentication states and actions using custom backend.
 */
export const useAuth = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const normalizeUser = (parsedUser) => ({
            ...parsedUser,
            fullName: parsedUser?.fullName || parsedUser?.name || "User",
            primaryEmailAddress: {
                emailAddress: parsedUser?.primaryEmailAddress?.emailAddress || parsedUser?.email || "",
            },
            primaryPhoneNumber: {
                phoneNumber: parsedUser?.primaryPhoneNumber?.phoneNumber || parsedUser?.phone || "",
            },
            unsafeMetadata: {
                ...(parsedUser?.unsafeMetadata || {}),
                coffeeStory: parsedUser?.unsafeMetadata?.coffeeStory || parsedUser?.coffeeStory || "",
            },
            imageUrl:
                parsedUser?.imageUrl ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    parsedUser?.fullName || parsedUser?.name || "User"
                )}&background=random`,
            createdAt: parsedUser?.createdAt || new Date().toISOString(),
        });

        const checkAuth = () => {
            const isAuth = localStorage.getItem("isAuthenticated") === "true";
            const storedUser = localStorage.getItem("user");
            
            if (isAuth && storedUser) {
                setIsSignedIn(true);
                try {
                    const parsedUser = JSON.parse(storedUser);
                    setUser(normalizeUser(parsedUser));
                } catch {
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
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("user");
        setIsSignedIn(false);
        setUser(null);
        try {
            await api.post("/auth/logout");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return {
        isLoaded,
        isSignedIn,
        user,
        signOut
    };
};
