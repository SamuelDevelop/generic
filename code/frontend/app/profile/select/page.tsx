"use client"
import Main from "@/components/Main/Main";
import ProfilesContainer from "@/components/Profile/ProfilesContainer/ProfilesContainer";
import { useProfile } from "@/hooks/profileContext";
import { getProfilesByLoggedUser } from "@/services/requests/profile";
import ProfileType from "@/types/props/ProfileType";
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
        <Main orientation="centralized">
            <ProfilesContainer profiles={profiles}/>
        </Main>
    )
}

export default SelectProfilePage;