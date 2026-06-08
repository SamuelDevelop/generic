import styles from "./NoticeInInput.module.css";

type props = {
    notice: string
    enableMark?: boolean
}

export default function NoticeInInput({notice, enableMark = true} : props){
    return (
        <p className={styles.notice}>
            {
                enableMark &&
                "* "
            }
            {notice}
        </p>
    )
}