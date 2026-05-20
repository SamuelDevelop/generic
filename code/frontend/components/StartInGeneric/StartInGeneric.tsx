'use client'
import { FaRegComment, FaRegHeart, FaShare } from "react-icons/fa";

import Button from "../Button/Button";
import styles from "./StartInGeneric.module.css"
import Image from "next/image";
import { FaSailboat } from "react-icons/fa6";
import { FiAlertTriangle } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import SimpleContainer from "../SimpleContainer/SimpleContainer";


function StartInGeneric(){

    const router = useRouter();
    const initialImages = ["/images/landscape/beach.jpg", "/images/landscape/dune.jpg", "/images/landscape/foto_areia.jpg", "/images/landscape/space.jpg"];
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
                    <p>Curta Posts, Waves, Videos e Profiles com qualidade Generic.</p>
                </div>
                                
                <Button
                    variant="comum"
                    onClick={() => router.push("/login")}
                >
                    <p><FaSailboat /></p>
                    <p>Navegar</p>
                </Button>
            </div>
            <div className={styles.imageStartSection}>
                <Image 
                    src={initialImage}
                    alt="carrocel de imagens de paisagens dinâmicas"
                    className={styles.imageStart}
                    width={1000}
                    height={1000}
                />

                <div className={styles.icones}>
                    <p><Icon icon="like"/></p>
                    <p><Icon icon="comment"/></p> 
                    <p><Icon icon="share"/></p>
                    <p><Icon icon="alert"/></p>
                    <p><Icon icon="boat"/></p>
                </div>        
            </div>
        </section>
    )
} 

export default StartInGeneric;