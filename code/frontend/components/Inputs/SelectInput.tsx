'use client'
import OptionProps from "@/types/OptionsProps"
import { useState } from "react"

type SelectInputProps = {
    options: OptionProps[],
    textLabel: string,
    name: string,
    aviso?: string
}

function SelectInput({options, textLabel, name, aviso} : SelectInputProps){
    const [selectedValue, setSelectedValue] = useState<string>()

    return(
        <label>
            <p>{textLabel}:</p>
            <select 
                name={name} 
                value={selectedValue} 
                onChange={e => setSelectedValue(e.target.value)}
                defaultValue={options.find(op => op.isSelected)?.value}
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