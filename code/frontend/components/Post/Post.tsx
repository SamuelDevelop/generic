import PostProps from "@/types/PostProps";
import Image from "next/image";
import styles from "./Post.module.css"

function Post({} : PostProps){
    
    const limiteCaracteresDescription = 100;

    return(
        <section className={styles.post}>
            <section className={styles.autor}>
                {
                    autor.getPersonalImage() !== null && autor.getPersonalImage() !== undefined ? 
                    <Image 
                        src={autor.getPersonalImage() ?? ""}
                        alt="personal image of a profile"
                        className={styles.profileImage}
                    />

                    :

                    <div className={styles.profileImage}> <p>PP</p> </div>
                }
                <p className={styles.autorName}>
                    <p>{autor.getFirstName()}  {autor.getLastName()}</p>
                </p>
            </section>

            <section className={styles.publication}>
                <img></img>
                <p className={styles.description}>
                    {
                        publication.getPublicationDescription().substring(0, limiteCaracteresDescription)
                    }
                </p>
            </section>

            <section className={styles.postAssets}>
            </section>
        </section>
    )
}

export default Post;