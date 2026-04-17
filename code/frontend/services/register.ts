import { apiFetch } from "./api"

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
        throw new Error("Erro ao Cadstrar");
    }
}