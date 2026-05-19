import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { getProfilesByLoggedUser } from "@/services/requests/profile";

export async function redirectAfterLogin(
    router: AppRouterInstance
) : Promise<void>{
    const profiles = await getProfilesByLoggedUser();

    console.log(profiles.length);

    if(profiles.length == 0){
        router.replace("/createProfile");
    }
    else{
        router.replace("/feed");
    }
}