import styles from "./Main.module.css"

type props = {
    children : React.ReactNode,
    orientation?: "centralized" | "topCenter" | "lefted"
}

const Main = ({children, orientation} : props) =>{
    const classes = `${styles.main} ${styles[orientation ?? "center"]}`;

    return(
        <main className={classes}>
            {children}
        </main>
    )
}

export default Main;