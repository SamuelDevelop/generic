import TwoPartSectionProps from "@/types/TwoPartSectionProps"
import Image from "next/image";
import styles from "./TwoPartSection.module.css"

function TwoPartSection({children, image, alt} : TwoPartSectionProps){
    return (
        <section className={styles.twoPartSection}>
            <section className={styles.childrenPart}>
                {children}
            </section>
            <section className={styles.imagePart}>
                <Image
                    src = {image}
                    alt = {alt ?? ""}
                    className={styles.image}
                    width={1000}
                    height={1000}
                />
            </section>
        </section>
    )
}

export default TwoPartSection;