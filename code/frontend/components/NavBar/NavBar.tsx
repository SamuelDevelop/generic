import { FaSearch } from "react-icons/fa";
import Button from "../Button/Button";
import styles from "./NavBar.module.css"

function NavBar({placeholder, value, onChange} : NavBarProps){
    return(
        <div className={styles.navBarConteiner}>
            <input
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={styles.navBar}
            ></input>
            <Button 
                variant="comum"
            >
                <FaSearch />
            </Button>
        </div>
        
        
    )
    
}

export default NavBar;