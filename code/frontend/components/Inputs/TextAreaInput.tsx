import styles from "./Inputs.module.css"
import textAreaInputProps from "@/types/textAreaInputProp";

function TextAreaInput({
        labelText, labelSide, inputId, inputName, aviso, placeholder, value, onChange
    } : textAreaInputProps){
    return (
        <label className={styles.textLabel}>
            <div className={`${styles.maintextInputArea} 
                            ${labelSide == "lateral" ? `${styles.lateral}` : `${styles.cima}`}
                `}>
                <p>{labelText}: </p>
                <textarea
                    id={inputId ?? ""}
                    name={inputName ?? ""}
                    placeholder={placeholder ?? ""}
                    rows={1} 
                    cols={60}
                    className={styles.textInput}
                    value={value}
                    onChange={onChange}
                ></textarea>
            </div>
            {aviso ? <p className={styles.aviso} >* {aviso}</p> : ""}            
        </label>
    )
}

export default TextAreaInput;