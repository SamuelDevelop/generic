'use client'
import NavBar from "../NavBar/NavBar";
import Image from "next/image";
import styles from "./Header.module.css"
import { FaSailboat } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/authContext";

function Header(){
    const router = useRouter();
    const {user} = useAuth();

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
                user ?
                <div>
                    <p>@{user.name}</p>
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