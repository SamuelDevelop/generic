import { apiFetch } from "./api"

export async function requestLogin(data : {
    login : string,
    password : string
}) {

    console.log(JSON.stringify(data));
    
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
        throw new Error("Erro ao Logar");
    }
}
