import OptionProps from "@/types/OptionsProps"

type SelectInputProps = {
    options: OptionProps[],
    textLabel: string,
    name: string,
    aviso?: string
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void 
    value?: string
}

function SelectInput({options, textLabel, name, aviso, onChange, value} : SelectInputProps){
    return(
        <label>
            <p>{textLabel}:</p>
            <select 
                name={name} 
                value={value} 
                onChange={onChange}
            >
                {
                    options.map((op, index) =>
                        <option 
                            key={index}
                            value={op.value} 
                        >
                            {op.text}
                        </option>
                    )
                }
            </select>

            {aviso ?? ""}
        </label>
    )
}

export default SelectInput;