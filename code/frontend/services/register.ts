import { apiFetch } from "./api"

export async function requestRegister(data : {
    nome: string,
    email: string,
    password: string
}) {
    const response = await apiFetch("/auth/register",
        {
            method: "POST",

            headers: {
                "Contentet-Type": "aplication/json"
            },

            body: JSON.stringify(data)
        }
    )

    if(!response.ok){
        throw new Error("Erro ao Cadstrar");
    }
}