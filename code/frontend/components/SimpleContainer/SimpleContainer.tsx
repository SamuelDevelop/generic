import styles from "./SimpleContainer.module.css";

type Props = {
    children: React.ReactNode
}

function SimpleContainer({children} : Props){
    return(
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default SimpleContainer;