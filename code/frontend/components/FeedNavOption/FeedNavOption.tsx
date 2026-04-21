import NavBarOptionsProps from "@/types/FeedNavOptionProps";
import styles from "./FeedNavOption.module.css"

function FeedNavOption({children, onclick} : NavBarOptionsProps){
    return(
        <button 
            onClick={onclick}
            className={styles.navOption}
        >
            {children}
        </button>
    )
}

export default FeedNavOption;