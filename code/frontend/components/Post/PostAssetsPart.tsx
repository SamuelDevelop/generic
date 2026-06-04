import PostProps from "@/types/props/PostProps";
import styles from "./Post.module.css";
import { FaRegHeart, FaSailboat, FaShare } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import PostOption from "../PostOption/PostOption";
import Icon from "../Icon/Icon";

type PostAssestsProps = Pick< 
    PostProps,
    "likesNumber"| "commentsnumber"
>

function PostAssestsPart({likesNumber, commentsnumber}: PostAssestsProps){
    return (
        <section className={styles.postAssets}>
            <PostOption
                typeOption="comum"
                number={likesNumber}
            >
                <Icon icon="like"/>
            </PostOption>

            <PostOption
                typeOption="comum"
                number={commentsnumber}
            >
                <Icon icon="comment"/>
            </PostOption>
            
            <PostOption
                typeOption="comum"
            >
                <Icon icon="share"/>
            </PostOption>
            
            <PostOption
                typeOption="critico"
            >
                <Icon icon="alert"/>
            </PostOption>

            <PostOption
                typeOption="comum"
            >
                <Icon icon="boat"/>
            </PostOption>
        </section>
    )
}

export default PostAssestsPart;