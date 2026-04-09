import styles from "./Button.module.css"

type buttonProps = {
    children : React.ReactNode,
    type : "comum" | "critico"
}

function Button({children, type} : buttonProps){
    return (
        <button 
            className={`
                ${type == "comum" ? styles.comum : ""}
                ${styles.button}
            `}  
        >
            {children}
        </button>
    )
}

export default Button;