import { apiFetch } from "@/services/api"

export async function requestRegister(data : {
    nome: string,
    email: string,
    password: string,
    role: "USER"
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
                name: data.nome,
                role: data.role
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


