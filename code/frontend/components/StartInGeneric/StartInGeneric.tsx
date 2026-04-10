'use client'
import { FaRegComment, FaRegHeart, FaShare } from "react-icons/fa";
import duneImage from "../../assets/images/dune.jpg";
import sandImage from "../../assets/images/foto_areia.jpg";
import Button from "../Button/Button";
import styles from "./StartInGeneric.module.css"
import Image from "next/image";
import { FaSailboat } from "react-icons/fa6";
import { FiAlertTriangle } from "react-icons/fi";
import { useRouter } from "next/navigation";


function StartInGeneric(){

    const router = useRouter();

    return (
        <section className={styles.startSection}>
            <div className={styles.textStartSection}>
                <h1>Comece a ser Generic</h1>
                <p>Entre agora mesmo e navegue pelos mares Generic's que você tanto ama.</p>
                
                <Button
                    type="comum"
                    onClick={() => router.push("/register")}
                >
                    Navegar
                </Button>
            </div>
            <div className={styles.imageStartSection}>
                <Image 
                    src={sandImage }
                    alt="imagem de dunas"
                    className={styles.imageStart}
                />

                <div className={styles.icones}>
                    <p><FaRegHeart /></p>
                    <p><FaRegComment /></p> 
                    <p><FaShare /></p>
                    <p><FiAlertTriangle /></p>
                    <p><FaSailboat /></p>
                </div>        
            </div>
        </section>
    )
} 

export default StartInGeneric;