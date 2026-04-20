import PostProps from "@/types/PostProps";
import styles from "./Post.module.css";
import Image from "next/image";

type PostAutorProps = Pick<
  PostProps,
  "authorFirstName" | "authorLastName" | "authorNickName" | "hasProfileImage" | "profileImage"
>;

function PostAutorPart({authorFirstName, authorLastName, hasProfileImage, profileImage, authorNickName} : PostAutorProps){
    const alternativeAvatarString = `${authorFirstName.charAt(0).toUpperCase()}${authorLastName.charAt(0).toUpperCase()}`;
    console.log(alternativeAvatarString);

    return (
        <section className={styles.autor}>
            {
                hasProfileImage ? 
                <Image 
                    src={profileImage || "/images/ideias/image-not-found"}
                    alt="personal image of a profile"
                    className={styles.profileImage}
                    width={1000}
                    height={1000}
                />

                :

                <div className={styles.alternativeAvatar}> <p>{alternativeAvatarString}</p> </div>
            }
            <div className={styles.autorNames}>
                <p>
                    {authorFirstName}  {authorLastName}
                </p>
                <p className={styles.autorNickname}>
                    {authorNickName}
                </p>
            </div>
            
        </section>
    )
}

export default PostAutorPart;