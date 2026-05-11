import { apiFetch } from "./api";
import { error } from "./mensageHelpers";

export async function getUserLogged() {
    const response = await apiFetch("/auth/me", {});

    if(!response.ok){
        error("Problema ao encontrar úsuario logado");
        return null;
    }

    return response.json();
}