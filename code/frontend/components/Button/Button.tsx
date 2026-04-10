import buttonProps from "@/types/ButtonProps";
import styles from "./Button.module.css"

function Button({children, type, onClick} : buttonProps){
    return (
        <button 
            className={`
                ${type == "comum" ? styles.comum : ""}
                ${styles.button}
            `} 
            onClick={onClick} 
        >
            {children}
        </button>
    )
}

export default Button;