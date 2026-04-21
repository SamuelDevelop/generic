import { apiFetch } from "./api";

export async function getUserLogged() {
    const response = await apiFetch("/auth/me", {});

    if(!response.ok){
        return null;
    }

    return response.json();
}