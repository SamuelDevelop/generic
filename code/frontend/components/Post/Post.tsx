import PostProps from "@/types/PostProps";
import styles from "./Post.module.css"
import PostAutorPart from "./PostAutorPart";
import PostPublicationPart from "./PostPublicationPart";
import PostAssestsPart from "./PostAssetsPart";

function Post(post : PostProps){
    
    return(
        <section className={styles.post}>
            <PostAutorPart 
                authorFirstName={post.authorFirstName}
                authorLastName={post.authorLastName}
                authorNickName={post.authorNickName}
                hasProfileImage={post.hasProfileImage}
                profileImage={post.profileImage}
            />

            <PostPublicationPart 
                postImage={post.postImage}
                publicationDescription={post.publicationDescription}
            />

            <PostAssestsPart
                likesNumber={post.likesNumber}
                commentsnumber={post.commentsnumber}
            />
        </section>
    )
}

export default Post;