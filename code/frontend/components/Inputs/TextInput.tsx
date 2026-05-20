"use client";
import styles from "./Inputs.module.css"

type textInputProps = {
    labelText : string,
    labelSide: "lateral" | "cima",
    placeholder? : string
    aviso?: string,
    inputId? : string,
    inputName? : string,
    inputValue? : string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function TextInput({
        labelText, labelSide, inputId, inputName, inputValue, onChange = () => {}, aviso, placeholder
    } : textInputProps){
    return (
        <label className={styles.textLabel}>
            <div className={`${styles.maintextInputArea} 
                            ${labelSide == "lateral" ? `${styles.lateral}` : `${styles.cima}`}
                `}>
                <p>{labelText}: </p>
                <input
                    id={inputId ?? ""}
                    name={inputName ?? ""}
                    value={inputValue ?? ""}
                    onChange={onChange}
                    placeholder={placeholder ?? ""}
                    className={styles.textInput}
                ></input>
            </div>
            {aviso ? <p className={styles.aviso} >* {aviso}</p> : ""}            
        </label>
    )
}

export default TextInput;