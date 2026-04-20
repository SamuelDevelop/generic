import PostProps from "@/types/PostProps";
import styles from "./Post.module.css";
import Image from "next/image";

type PostPublicationProps = Pick< 
    PostProps,
    "postImage"| "publicationDescription"
>

function PostPublicationPart({postImage, publicationDescription} : PostPublicationProps){
    const limiteCaracteresDescription = 71;

    return (
        <section className={styles.publication}>
            <Image 
                src={postImage || "/images/ideias/image-not-found"}
                alt={publicationDescription}
                className={styles.publicationImage}
                width={1000}
                height={1000}
            />
            <p className={styles.description}>
                {
                    publicationDescription.substring(0, limiteCaracteresDescription)
                }
                {
                    publicationDescription.length > limiteCaracteresDescription ?
                    `(...more)` : ""
                }
            </p>
        </section>
    )
}

export default PostPublicationPart;