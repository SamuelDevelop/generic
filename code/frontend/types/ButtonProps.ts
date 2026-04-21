type buttonProps = {
    children : React.ReactNode,
    variant : "comum" | "critico",
    type?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default buttonProps;