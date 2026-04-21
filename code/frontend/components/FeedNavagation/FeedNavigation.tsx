import styles from "./FeedNavigation.module.css"
import FeedNavOption from "../FeedNavOption/FeedNavOption";
import Icon from "../Icon/Icon";

function FeedNavigation(){
    return (
        <aside className={styles.navigation}>
            <FeedNavOption>
                <Icon icon="swirl"/>
            </FeedNavOption>

            <FeedNavOption>
                <Icon icon="comment"/>
            </FeedNavOption>

            <FeedNavOption>
                <Icon icon="book"/>
            </FeedNavOption>
            
            <FeedNavOption>
                <Icon icon="boat"/>
            </FeedNavOption>
        </aside>
    )
}

export default FeedNavigation;