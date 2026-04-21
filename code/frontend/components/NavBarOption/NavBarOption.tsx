import NavBarOptionsProps from "@/types/NavBarOptionsProps";
import styles from "./NavBarOption.module.css"

function NavBarOption({children, onclick} : NavBarOptionsProps){
    return(
        <button 
            onClick={onclick}
            className={styles.navBarOption}
        >
            {children}
        </button>
    )
}

export default NavBarOption;