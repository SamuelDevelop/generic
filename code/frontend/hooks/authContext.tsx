"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getLoggedInUser } from "@/services/requests/user";
import { User } from "@/types/UserType";

type AuthContextType = {
    user: User | null;
    logged: boolean;
    loading: boolean;

    setUser: (user: User | null) => void;
    reloadUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const reloadUser = async () => {
        setLoading(true);

        try {
            const data = await getLoggedInUser();
            setUser(data);
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        reloadUser();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                logged: !!user,
                loading,
                setUser,
                reloadUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }

    return context;
};