'use client'
import styles from "@/app/notFound/notFound.module.css"

import { FaSailboat } from "react-icons/fa6";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import TwoPartSection from "@/components/TwoPartSection/TwoPartSection";

export default function NotFound() {
    const router = useRouter();

  return (
    <main className="allScreen">

        <TwoPartSection
            image={"/images/landscape/space.jpg"}
        >
            <div className={styles.icones}>
                <h1><FaSailboat /> Ops!</h1>
                <p>  Erro: 404 - Seu navio acabou afundando. Mas não se preocupe você pode sair daqui e continuar a navegar</p>
            </div>     
            
            <Button
                variant="comum"
                onClick={() => router.push("/")}
            >
                <p><FaSailboat /></p>
                <p>Navegar</p>
            </Button>
        </TwoPartSection>      
        
    </main>
  );
}
