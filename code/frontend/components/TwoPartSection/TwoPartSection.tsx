import Image, { StaticImageData } from "next/image";
import styles from "./TwoPartSection.module.css"

type TwoPartSectionProps = {
    children : React.ReactNode
    image: StaticImageData | string
    alt?: string
}

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