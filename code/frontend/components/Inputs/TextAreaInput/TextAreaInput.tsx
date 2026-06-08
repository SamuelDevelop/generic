import NoticeInInput from "../NoticeInInput/NoticeInInput"
import styles from "./TextAreaInput.module.css"

type textAreaInputProps = {
    labelText : string,
    labelSide: "lateral" | "cima",
    placeholder? : string
    aviso?: string,
    inputId? : string,
    inputName? : string,
    value? : string,
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

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
            {aviso && <NoticeInInput notice={aviso}/>}            
        </label>
    )
}

export default TextAreaInput;