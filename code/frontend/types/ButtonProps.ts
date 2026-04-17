type buttonProps = {
    children : React.ReactNode,
    variant : "comum" | "critico",
    type?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default buttonProps;