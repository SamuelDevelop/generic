import { apiFetch } from "./api";
import { getUserLogged } from "./userService";

export async function getProfilesByLoggedUser() {
    const owner = await getUserLogged();
    const ownerLogin = owner.login;
    const response = await apiFetch(`/profile/owner/${ownerLogin}`)
    
    if(!response.ok){
        return null;
    }

    return response.json();
}