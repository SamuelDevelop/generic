"use client";
import { useState } from "react";
import Input from "../Input/Input";
import styles from "./PasswordInput.module.css"
import Icon from "@/components/Icon/Icon";
import NoticeInInput from "../NoticeInInput/NoticeInInput";

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

function PasswordInput({
        labelText, labelSide, inputId, inputName, inputValue, onChange = () => {}, aviso, placeholder
    } : textInputProps){

    const [showPassword, setShowPassword] = useState<boolean>(false);
    
    function toggleShowPassword(){
        setShowPassword(prev => !prev);
    }

    return (
        <label className={styles.textLabel}>
            <div className={`${styles.mainPasswordInputArea} 
                            ${labelSide == "lateral" ? `${styles.lateral}` : `${styles.cima}`}
                `}>
                <p>{labelText}: </p>
                <div className={styles.inputWithShowButton}>
                    <Input
                        id={inputId ?? ""}
                        name={inputName ?? ""}
                        type={ showPassword ? "text" : "password"}
                        value={inputValue ?? ""}
                        onChange={onChange}
                        placeholder={placeholder ?? ""}
                    ></Input>
                    <button 
                        className={styles.showButton}
                        onClick={toggleShowPassword}
                        type="button"
                    >
                        {
                            showPassword ?
                            <Icon icon="eyeSlash"/>
                            :
                            <Icon icon="eye"/>
                        }
                    </button>
                </div>
            </div>
            {aviso && <NoticeInInput notice={aviso}/>}
        </label>
    )
}

export default PasswordInput;