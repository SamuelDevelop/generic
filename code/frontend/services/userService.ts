import { apiFetch } from "./api";
import { error } from "./mensageHelpers";

export async function getUserLogged() {
    const response = await apiFetch("/auth/me", {});

    if(!response.ok){
        throw new Error("Problema ao encontrar usuário logado");
    }

    return response.json();
}