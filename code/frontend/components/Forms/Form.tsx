type props = {
    children: React.ReactNode
}

const Form = ({children} : props) =>{
    return(
        <form>
            {children}
        </form>
    )
}

export default Form;