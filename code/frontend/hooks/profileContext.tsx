"use client"
import { createContext, useContext, useEffect, useState } from "react";
import ProfileType from "@/types/ProfileType";

type ProfileContextType = {
    profile: ProfileType | null;
    existsProfile: boolean;
    setProfile: (profile: ProfileType) => void;
};

const ProfileContext = createContext<ProfileContextType | null>(null);

export function ProfileProvider({children} : { children: React.ReactNode }){
    const [profile, setProfile] = useState<ProfileType | null>(null);

    return(
        <ProfileContext.Provider
            value={{
                profile, 
                existsProfile: !!profile,
                setProfile
            }}
        >
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => {
    const context = useContext(ProfileContext);

    if (!context) {
        throw new Error("useProfile should be used within AuthProvider");
    }

    return context;
};