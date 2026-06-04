import OptionProps from "@/types/props/OptionsProps"
import styles from "./Inputs.module.css"

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
        <label className={styles.selectLabel}>
            <p>{textLabel}:</p>
            <select 
                name={name} 
                value={value} 
                onChange={onChange}
                className={styles.selectInput}
            >
                {
                    options.map((op, index) =>
                        <option 
                            key={index}
                            value={op.value} 
                            className={styles.option}
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