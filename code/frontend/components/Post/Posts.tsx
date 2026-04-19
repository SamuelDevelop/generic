import PostProps from "@/types/PostProps";
import PostComponent from "./Post";
import Post from "./Post";
import styles from "./Post.module.css"

type Props = {
  posts: PostProps[];
};

function Posts({ posts } : Props){
    return (
       <section className={styles.posts}>
            {
                posts.map(p =>
                    <Post 
                        key={p.authorNickName}
                        authorFirstName={p.authorFirstName}
                        authorLastName={p.authorLastName}
                        authorNickName={p.authorNickName}
                        hasProfileImage={p.hasProfileImage}
                        profileImage={p.profileImage}
                        postImage={p.postImage}
                        publicationDescription={p.publicationDescription}
                        likesNumber={p.likesNumber}
                        commentsnumber={p.commentsnumber}
                    />
                )
            }
       </section> 
    )
}

export default Posts;