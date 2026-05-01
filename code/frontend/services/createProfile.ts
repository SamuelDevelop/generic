import { apiFetch } from "./api"
import { getUserLogged } from "./userService";

export async function requestRegister(data : {
    firstName: string,
    lastName: string,
    birthday: Date,
    gender: "MALE" | "FEMALE" | "NONBINARY" | "NOTINFORMED",

    description: string,
    nickName: string,
    profileImage: File
}) {
    const loggedUser = await getUserLogged();
    
    const response = await apiFetch("/profile/create",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                userId: loggedUser.id,
                nickName: data.nickName,
                firstName: data.firstName,
                lastName: data.lastName,
                description: data.description,
                gender: data.gender,
                birthday: data.birthday,
                personalImage: data.profileImage
            })
        }
    )

    if(!response.ok){
        throw new Error("Erro ao Cadstrar");
    }
}