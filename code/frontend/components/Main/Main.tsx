import styles from "./Main.module.css"

type props = {
    children : React.ReactNode,
    orientation?: "center" | "topCenter"
}

const Main = ({children, orientation} : props) =>{
    
    return(
        <main className={styles[orientation ?? "center"]}>
            {children}
        </main>
    )
}

export default Main;