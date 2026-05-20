import { useProfile } from "@/hooks/profileContext";
import { redirectToFeed } from "@/services/utils/redirect";
import ProfileType from "@/types/ProfileType";
import { useRouter } from "next/navigation";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import Button from "@/components/Button/Button";
import styles from "./ProfilesContainer.module.css";
import Icon from "@/components/Icon/Icon";

type props = {
    profiles : ProfileType[]
}

function ProfilesContainer({profiles} : props){
    const {setProfile } = useProfile();
    const router = useRouter();
    console.log(profiles);
    
    if(profiles.length == 0){
        return (
            <section className={styles.profilesContainer}>
                <h1>Você ainda não possui perfis! Criar?</h1>
                <Button 
                    variant="comum"
                    onClick={()=>{router.push("profile/create")}}
                >
                    Criar
                </Button>
            </section>
        )
    }

    return(
        <section className={styles.profilesContainer}>
            <h1>Selecione um Perfil:</h1>
            <section className={styles.container}>
                {
                    profiles.map((p, index) =>
                        <ProfileHeader 
                            key={index}
                            profile={p}

                            onClick={()=>{
                                setProfile(p)
                                redirectToFeed(router);
                            }}
                        />
                    )
                }
            </section>
            <Button variant="comum" onClick={()=>{router.push("/profile/create")}}>
                <Icon icon="plus"/> Criar Novo Perfil
            </Button>
            <a href="/login">Voltar a página de login</a>
        </section>
        
    )
}

export default ProfilesContainer;