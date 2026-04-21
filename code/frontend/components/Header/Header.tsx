'use client'
import HeaderProps from "@/types/HeaderProps";
import NavBar from "../NavBar/NavBar";
import Image from "next/image";
import styles from "./Header.module.css"
import { FaSailboat } from "react-icons/fa6";
import { useRouter } from "next/navigation";

function Header(
    {
        isUserLogado,
        userHasPersonalImage,
        userPersonalImage,
        userNickName,
        userFirstName
    } : HeaderProps
){
    const router = useRouter();

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
                isUserLogado ?
                <div>
                    {userHasPersonalImage && (
                        <Image src={userPersonalImage ?? ""} alt="userFoto" />
                    )}
                    <p>@{userNickName}</p>
                    <p>{userFirstName}</p>
                </div>
                :
                <div>
                    <a>Meus perfis</a>
                </div>
            }
        </header>
    )    
}

export default Header;