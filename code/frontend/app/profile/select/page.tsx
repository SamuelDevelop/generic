"use client"
import ProfilesContainer from "@/components/Profile/ProfilesContainer/ProfilesContainer";
import { useProfile } from "@/hooks/profileContext";
import { getProfilesByLoggedUser } from "@/services/requests/profile";
import ProfileType from "@/types/ProfileType";
import { useEffect, useState } from "react";

function SelectProfilePage(){
    const [profiles, setProfiles] = useState<ProfileType[]>([]);

    useEffect(() => {
        (async () => {
            const userProfiles = await getProfilesByLoggedUser();
            console.log(userProfiles)
            setProfiles(userProfiles);
        })();
    }, []);

    return (
        <ProfilesContainer profiles={profiles}/>
    )
}

export default SelectProfilePage;