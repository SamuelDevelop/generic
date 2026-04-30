"use client";
import textInputProps from "@/types/textInputProps";
import styles from "./Inputs.module.css"

function TextAreaInput({
        labelText, labelSide, inputId, inputName, aviso, placeholder
    } : textInputProps){
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
                    rows={4} 
                    cols={50}
                    className={styles.textInput}
                ></textarea>
            </div>
            {aviso ? <p className={styles.aviso} >* {aviso}</p> : ""}            
        </label>
    )
}

export default TextAreaInput;