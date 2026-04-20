import { AiFillThunderbolt } from "react-icons/ai";
import styles from "./FeedNavigation.module.css"
import { FaBook, FaRegComment, FaSailboat } from "react-icons/fa6";

function FeedNavigation(){
    return (
        <aside className={styles.navigation}>
            <p className={styles.navOption}><AiFillThunderbolt /></p>
            <p className={styles.navOption}><FaRegComment /></p>
            <p className={styles.navOption}><FaBook /></p>
            <p className={styles.navOption}><FaSailboat /></p>
        </aside>
    )
}

export default FeedNavigation;