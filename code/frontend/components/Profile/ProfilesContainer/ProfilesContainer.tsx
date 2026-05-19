import { useProfile } from "@/hooks/profileContext";
import { redirectToFeed } from "@/services/utils/redirect";
import ProfileType from "@/types/ProfileType";
import { useRouter } from "next/navigation";

type props = {
    profiles : ProfileType[]
}

function ProfilesContainer({profiles} : props){
    const {setProfile } = useProfile();
    const router = useRouter();
    
    if(profiles.length == 0){
        return (
            <section>
                <h1>Você ainda não possui perfis! Criar?</h1>
            </section>
        )
    }

    return(
        <section>
            {
                profiles.map((p, index) =>
                    <section key={index} onClick={()=>{
                        setProfile(p)
                        redirectToFeed(router);
                    }}>
                        <h1>{p.firstname}</h1>
                        <p>@{p.nickname}</p>
                    </section>
                )
            }
        </section>
    )
}

export default ProfilesContainer;