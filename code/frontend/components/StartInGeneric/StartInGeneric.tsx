'use client'
import { FaRegComment, FaRegHeart, FaShare } from "react-icons/fa";

import beachImage from "../../assets/images/landscape_photos/beach.jpg";
import duneImage from "../../assets/images/landscape_photos/dune.jpg";
import sandImage from "../../assets/images/landscape_photos/foto_areia.jpg";

import Button from "../Button/Button";
import styles from "./StartInGeneric.module.css"
import Image from "next/image";
import { FaSailboat } from "react-icons/fa6";
import { FiAlertTriangle } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


function StartInGeneric(){

    const router = useRouter();
    const initialImages = [sandImage, duneImage, beachImage];
    const [imageIndex, setImageIndex] = useState<number>(0);
    
    useEffect(()=>{
        const interval = window.setInterval(()=> {
            setImageIndex(prev => (prev + 1)% initialImages.length)
        }, 2000) ;

        return ()=> window.clearInterval(interval);
    });

    const initialImage = initialImages[imageIndex];

    return (
        <section className={styles.startSection}>
            <div className={styles.textStartSection}>
                <div>
                    <h1>Comece a ser Generic</h1>
                    <p>Entre agora mesmo e navegue pelos mares Generic's que você tanto ama.</p>
                    <p>Curta Posts, Swirls, Videos e Profiles com qualidade Generic.</p>
                </div>
                                
                <Button
                    type="comum"
                    onClick={() => router.push("/register")}
                >
                    <p><FaSailboat /></p>
                    <p>Navegar</p>
                </Button>
            </div>
            <div className={styles.imageStartSection}>
                <Image 
                    src={initialImage}
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