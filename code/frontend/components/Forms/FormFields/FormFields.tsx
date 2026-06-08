import styles from "./FormFields.module.css"

type Props = {
    children: React.ReactNode
    orientation?: "row" | "column"
}


function FormFields ({ children, orientation = "column" }: Props){
    
    const classes = 
    `
        ${styles.formFields}
        ${styles[orientation]}
    `;

    return (
        <div className={`${classes}`}>
            {children}
        </div>
    )
    
}

export default FormFields;