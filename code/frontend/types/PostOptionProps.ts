type PostOptionProps = {
    children : React.ReactNode
    typeOption: "comum" | "critico"
    number: number
    onclick? : (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default PostOptionProps;