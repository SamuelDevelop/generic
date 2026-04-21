import PostOptionProps from "@/types/PostOptionProps";
import { useState } from "react";
import styles from "./PostOption.module.css"

function PostOption({ children, typeOption, number, onclick }: PostOptionProps) {
    return (
        <button
            className={`${styles.postOption} ${typeOption == "critico" ? styles.critico : ""}`}
            onClick={onclick}
        >
            <div className={styles.action}>{children}</div>
            {
                number != null && <p>{number}</p>
            }
        </button>
    )
}

export default PostOption;