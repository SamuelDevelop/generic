"use client"

import { User } from "@/types/UserType";
import { createContext, useContext, useEffect, useState } from "react";
import { getUserLogged } from "@/services/userService";

type AuthContextType = {
    user: User | null;
    logged: boolean;
    loading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({children} : { children: React.ReactNode }){
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    async function loadUser() {
        const data = await getUserLogged();

        setUser(data);
        setLoading(false);
    }

    useEffect(()=>{
        loadUser();
    }, []);

    return(
        <AuthContext.Provider
            value={{
                user, 
                logged: !!user,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth deve ser usado dentro de AuthProvider");
    }

    return context;
};