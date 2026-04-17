import Button from "../Button/Button";
import StartInGeneric from "../StartInGeneric/StartInGeneric";
import TwoPartSection from "../TwoPartSection/TwoPartSection";
import styles from "./FeedSection.module.css"
import pinkImage from "@/assets/images/landscape_photos/pink_tree.jpg"

function FeedSection({userHaveProfile} : FeedSectionProps){
    return(
        <section className={styles.feedSection}>
            {
                userHaveProfile ?

                <section>
                    <StartInGeneric></StartInGeneric>
                </section>

                :
                
                <section>
                    <TwoPartSection
                        image={pinkImage}
                    >
                        <h1>Crie um perifl Generic!</h1>
                        <p>Você tem uma conta mas, Você anida não possui um perifl Generic</p>
                        <Button
                            variant="comum"
                        >Crie Agora</Button>
                    </TwoPartSection>
                    
                </section>
            }
        </section>
    )
}

export default FeedSection;