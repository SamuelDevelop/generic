import { apiFetch } from "@/services/api"
import { showErrorMessage, showSuccessMessage } from "@/services/utils/mensageHelpers";
import ProfileType from "@/types/props/ProfileType";
import { getImageMimeType } from "../utils/formatImage";


export async function requestCreateProfile(data : {
    firstName: string,
    lastName: string,
    description: string,
    nickName: string,
    profileImage?: File | undefined
}) {
    const formData = new FormData();

    formData.append("nickname", data.nickName);
    formData.append("firstname", data.firstName);
    formData.append("lastname", data.lastName);
    formData.append("description", data.description);

    if (data.profileImage) {
        formData.append("personalImage", data.profileImage);
    }

    for (const [key, value] of formData.entries()) {
        console.log(key, value);
    }
    
    const response = await apiFetch("/profiles/create", {
        method: "POST",
        body: formData
    });

    if (!response.ok) {
        const message = await response.text()

        showErrorMessage(message)
    } else {
        showSuccessMessage("O seu perfil foi criado!")
    }

    return response;
}

export async function getProfilesByLoggedUser() : Promise<ProfileType[]> {
    const profiles : ProfileType[] = [];
    const response = await apiFetch(`/profiles/my/list`);
    
    if(!response.ok){
        return [];
    }

    const formData = await response.json();

    formData.forEach((p: any) => {

        let profileImage = "";

        if (p.profileImage) {
            const mimeType = getImageMimeType(p.profileImage);

            profileImage = `data:${mimeType};base64,${p.profileImage}`;
        }

        const profile: ProfileType = {
            nickname: p.nickname,
            firstname: p.firstname,
            lastname: p.lastname,
            profileImage: profileImage,
            description: p.description
        };

        profiles.push(profile);
    });

    return profiles;
}

export async function selectUserProfile(profile : ProfileType){
    const response = await apiFetch(`/profiles/my/select/${profile.nickname}`);

    console.log(response);
    return response;
}

export async function getSelectedProfile(){
    const response = await apiFetch(`/profiles/my/selected`);

    return response.json();
}