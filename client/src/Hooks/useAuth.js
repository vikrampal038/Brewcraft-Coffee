import { useUser, useClerk } from "@clerk/clerk-react";

/**
 * Custom hook to unify Clerk authentication states and actions.
 */
export const useAuth = () => {
    const { isLoaded, isSignedIn, user } = useUser();
    const { signOut } = useClerk();

    return {
        isLoaded,
        isSignedIn,
        user,
        signOut
    };
};
