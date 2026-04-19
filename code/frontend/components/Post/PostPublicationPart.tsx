import PostProps from "@/types/PostProps";
import styles from "./Post.module.css";
import Image from "next/image";
import duneImg from "@/assets/images/landscape_photos/dune.jpg";

type PostPublicationProps = Pick< 
    PostProps,
    "postImage"| "publicationDescription"
>

function PostPublicationPart({postImage, publicationDescription} : PostPublicationProps){
    const limiteCaracteresDescription = 100;

    return (
        <section className={styles.publication}>
            <Image 
                src={postImage || duneImg}
                alt={publicationDescription}
                className={styles.publicationImage}
                width={1000}
                height={1000}
            />
            <p className={styles.description}>
                {
                    publicationDescription.substring(0, limiteCaracteresDescription)
                }
            </p>
        </section>
    )
}

export default PostPublicationPart;