import { apiFetch } from "@/services/api"
import GenderEnum from "@/types/enums/GenderEnum"

export async function requestRegister(data : {
    name: string,
    email: string,
    password: string,
    role: "USER",
    gender: GenderEnum
    birthday: Date
    phoneNumber: string | null
}) {
    const response = await apiFetch("/auth/register",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                login: data.email,
                password: data.password,
                name: data.name,
                role: data.role,
                gender: data.gender,
                birthday: data.birthday,
                phoneNumber: data.phoneNumber
            })
        }
    )

    if(!response.ok){
        throw new Error("Verifique os dados preenchidos e tente novamente.");
    }
}

export async function requestLogin(data : {
    login : string,
    password : string
}) {
    
    const response = await apiFetch("/auth/login", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            login: data.login,
            password: data.password,
        })
    })

    if(!response.ok){
        throw new Error("Verifique email e senha de seu úsuario");
    }
}


