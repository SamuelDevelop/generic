import PostOptionProps from "@/types/PostOptionProps";
import { useState } from "react";
import styles from "./PostOption.module.css"

function PostOption({children, typeOption, number, onclick} : PostOptionProps){
    const [optionNumber, setoptionNumber] = useState<number | null>(null);

    if(number){
        setoptionNumber(number);
    }

    return(
        <button
            className={`${styles.postOption} ${typeOption == "critico" ? styles.critico : ""}`}
            onClick={onclick}
        >
            <div className={styles.action}>{children}</div>
            {
                optionNumber != null 
                ?
                    <p>{optionNumber}</p>
                :
                    ""
            }
        </button>
    )
}

export default PostOption;