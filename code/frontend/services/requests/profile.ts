import { apiFetch } from "@/services/api"
import { showErrorMessage, showSuccessMessage } from "@/services/utils/mensageHelpers";
import { getLoggedInUser } from "@/services/requests/user";
import ProfileType from "@/types/ProfileType";
import { getImageMimeType } from "../utils/formatImage";


export async function requestCreateProfile(data : {
    firstName: string,
    lastName: string,
    birthday: Date,
    gender: "MALE" | "FEMALE" | "NONBINARY" | "NOTINFORMED" | "UNDEFINED",
    description: string,
    nickName: string,
    profileImage?: File | undefined
}) {
    const loggedUser = await getLoggedInUser();
    const formData = new FormData();

    formData.append("userLogin", loggedUser.login);
    formData.append("nickName", data.nickName);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("description", data.description);
    formData.append("gender", data.gender);
    formData.append("birthday", data.birthday.toISOString().split("T")[0]);

    if (data.profileImage) {
        formData.append("personalImage", data.profileImage);
    }
    
    const response = await apiFetch("/profile/create", {
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
    const owner = await getLoggedInUser();
    const ownerLogin = owner.login;
    const response = await apiFetch(`/profile/owner/${ownerLogin}`)
    
    if(!response.ok){
        return [];
    }

    const formData = await response.json();
    console.log(formData);

    formData.forEach((p: any) => {

        let profileImage = "";

        if (p.profileImage) {
            const mimeType = getImageMimeType(p.profileImage);

            profileImage = `data:${mimeType};base64,${p.profileImage}`;
        }

        const profile: ProfileType = {
            nickname: p.nickName,
            gender: p.gender,
            firstname: p.firstName,
            lastname: p.lastName,
            profileImage: profileImage,
            birthday: p.birthday,
            description: p.description
        };

        profiles.push(profile);
    });

    return profiles;
}