type buttonProps = {
    children : React.ReactNode,
    type : "comum" | "critico"
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default buttonProps;