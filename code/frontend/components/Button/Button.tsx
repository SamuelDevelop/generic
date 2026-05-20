import styles from "./Button.module.css"

type buttonProps = {
    children: React.ReactNode,
    variant: "comum" | "critico",
    type?: "button" | "submit" | "reset",
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    disable?: boolean
}

function Button({
    children, 
    type, 
    onClick,
    variant,
    disable
} : buttonProps){

    const classes = `${styles[variant]} ${styles.button}`;

    return (
        <button 
            className={classes} 
            onClick={onClick}
            type={type} 
            disabled={disable}
        >
            {children}
        </button>
    )
}

export default Button;