import PostProps from "@/types/PostProps";
import styles from "./Post.module.css";
import Image from "next/image";

type PostAutorProps = Pick<
  PostProps,
  "authorFirstName" | "authorLastName" | "authorNickName" | "hasProfileImage" | "profileImage"
>;

function PostAutorPart({authorFirstName, authorLastName, hasProfileImage, profileImage} : PostAutorProps){
    const alternativeAvatarString = `${authorFirstName.charAt(0).toUpperCase()}${authorLastName.charAt(0).toUpperCase()}`;
    console.log(alternativeAvatarString);

    return (
        <section className={styles.autor}>
            {
                hasProfileImage ? 
                <Image 
                    src={profileImage ?? ""}
                    alt="personal image of a profile"
                    className={styles.profileImage}
                />

                :

                <div className={styles.alternativeAvatar}> <p>{alternativeAvatarString}</p> </div>
            }
            <p className={styles.autorName}>
                {authorFirstName}  {authorLastName}
            </p>
        </section>
    )
}

export default PostAutorPart;