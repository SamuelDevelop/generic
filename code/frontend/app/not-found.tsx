'use client'
import Image from "next/image";
import image from "@/assets/images/landscape_photos/pink_tree.jpg"
import styles from "@/app/notFound/notFound.module.css"

import { FaSailboat } from "react-icons/fa6";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

  return (
    <main className="allScreen">
              
        <Image
            className={styles.mainImage}
            src={image}
            alt="pink tree"
        ></Image>

        <div className={styles.icones}>
            <p></p>
        </div>     
        <h1><FaSailboat /> Página não encontrada</h1>
        <p>  Erro: 404 - Seu navio acabou afundando. Mas não se preocupe você pode sair daqui e continuar a navegar</p>

        <Button
            type="comum"
            onClick={() => router.push("/")}
        >
            <p><FaSailboat /></p>
            <p>Navegar</p>
        </Button>
    </main>
  );
}
