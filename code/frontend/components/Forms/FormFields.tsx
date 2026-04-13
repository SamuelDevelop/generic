import styles from "./Forms.module.css"

type Props = {
    children: React.ReactNode
}


function FormFields ({ children }: Props){
    return (
        <div className={styles.formFields}>
            {children}
        </div>
    )
    
}

export default FormFields;