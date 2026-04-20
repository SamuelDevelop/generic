import PostProps from "@/types/PostProps";
import styles from "./Post.module.css";
import { FaRegHeart, FaSailboat, FaShare } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";

type PostAssestsProps = Pick< 
    PostProps,
    "likesNumber"| "commentsnumber"
>

function PostAssestsPart({likesNumber, commentsnumber}: PostAssestsProps){
    return (
        <section className={styles.postAssets}>
            <div className={styles.postAction}>
                <p><FaRegHeart /></p> 
                <p>{likesNumber}</p>
            </div>
            <div className={styles.postAction}>
                <p><FaRegComment /></p> 
                <p>{commentsnumber}</p>
            </div>
            
            <div className={styles.postAction}>
                <p><FaShare /></p>
            </div> 
            
            <div className={styles.postAction}>
                <p><FiAlertTriangle /></p>
            </div> 
            
            <div className={styles.postAction}>
                <p><FaSailboat /></p>
            </div> 
        </section>
    )
}

export default PostAssestsPart;