import styles from "./FeedNavOption.module.css"

type props = {
    children : React.ReactNode
    onclick? : (e: React.MouseEvent<HTMLButtonElement>) => void
}


function FeedNavOption({children, onclick} : props){
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