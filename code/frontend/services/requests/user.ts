import { apiFetch } from "@/services/api";
import { showErrorMessage } from "@/services/utils/mensageHelpers";

export async function getLoggedInUser() {
    const response = await apiFetch("/users/me", {});

    if(!response.ok){
        showErrorMessage("Problema ao procurar usuário logado");
    }

    return response.json();
}