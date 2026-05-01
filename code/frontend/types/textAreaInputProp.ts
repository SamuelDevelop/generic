type textAreaInputProps = {
    labelText : string,
    labelSide: "lateral" | "cima",
    placeholder? : string
    aviso?: string,
    inputId? : string,
    inputName? : string,
    value? : string,
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default textAreaInputProps;