import { apiFetch } from "./api"
import { error, success } from "./mensageHelpers";
import { getUserLogged } from "./userService";

export async function requestCreateProfile(data : {
    firstName: string,
    lastName: string,
    birthday: Date,
    gender: "MALE" | "FEMALE" | "NONBINARY" | "NOTINFORMED" | "UNDEFINED",
    description: string,
    nickName: string,
    profileImage?: File | undefined
}) {
    const loggedUser = await getUserLogged();
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

        error(message)
    } else {
        success("Perfil Criado!")
    }
}