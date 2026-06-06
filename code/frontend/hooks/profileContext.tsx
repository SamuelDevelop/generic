"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getSelectedProfile } from "@/services/requests/profile";
import ProfileType from "@/types/props/ProfileType";
import { useAuth } from "./authContext";

type ProfileContextType = {
    profile: ProfileType | null;
    existsProfile: boolean;
    loading: boolean;

    setProfile: (profile: ProfileType | null) => void;
    reloadProfile: () => Promise<void>;
};

const ProfileContext = createContext<ProfileContextType | null>(null);

export function ProfileProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, loading: authLoading } = useAuth();

    const [profile, setProfile] = useState<ProfileType | null>(null);
    const [loading, setLoading] = useState(true);

    const reloadProfile = async () => {
        if (!user) {
            setProfile(null);
            setLoading(false);
            return;
        }

        setLoading(true);

        try {
            const data = await getSelectedProfile();
            setProfile(data);
        } catch {
            setProfile(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (authLoading) {
            return;
        }

        reloadProfile();
    }, [user, authLoading]);

    return (
        <ProfileContext.Provider
            value={{
                profile,
                existsProfile: !!profile,
                loading,
                setProfile,
                reloadProfile,
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
}

export const useProfile = () => {
    const context = useContext(ProfileContext);

    if (!context) {
        throw new Error("useProfile must be used within ProfileProvider");
    }

    return context;
};