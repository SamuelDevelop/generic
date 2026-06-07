"use client";
import styles from "./Input.module.css"

type props = {
    type?: string,
    placeholder? : string
    id? : string,
    name? : string,
    value? : any,
    step?: number
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input(
    {
        id,
        name,
        type = "text", 
        value,
        placeholder,
        step,
        onChange
    } : props
){
    return (
        <input
            id={id}
            name={name}
            className={styles.input}
            type={type}
            value={value}
            placeholder={placeholder}
            step={step}
            onChange={onChange}
        >
        </input>
    )
}
