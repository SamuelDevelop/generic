import styles from "./Forms.module.css"

type props = {
    children: React.ReactNode
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({children} : props) =>{
    return(
        <form className={styles.form}>
            {children}
        </form>
    )
}

export default Form;