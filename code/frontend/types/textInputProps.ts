type textInputProps = {
    labelText : string,
    labelSide: "lateral" | "cima",
    placeholder? : string
    aviso?: string,
    inputId? : string,
    inputName? : string,
    inputValue? : string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default textInputProps;