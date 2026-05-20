'use client'
import NavBar from "../NavBar/NavBar";
import Image from "next/image";
import styles from "./Header.module.css"
import { FaSailboat } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/authContext";
import { useProfile } from "@/hooks/profileContext";
import ProfileHeader from "../Profile/ProfileHeader/ProfileHeader";

function Header(){
    const router = useRouter();
    const {user} = useAuth();
    const { profile } = useProfile();

    console.log(profile)

    return(
        <header className={styles.header}>
            <div 
                className={styles.logotipo} 
                onClick={() => router.push("/")}
            >
                <FaSailboat />
                <h3><b>Generic</b></h3>
            </div>    
            
            <NavBar
                placeholder="Pesquise algo para começar..."
            />
            
            {
                user && profile ?
                <ProfileHeader 
                    profile={profile}
                    onClick={()=>{
                        router.push("/profile/select")
                    }}
                />
                :
                <div>
                    <a href="/login">Entre com seu Perfil</a>
                </div>
            }
        </header>
    )    
}

export default Header;