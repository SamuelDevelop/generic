import DateInput from "@/components/Inputs/DateInput";
import SelectInput from "@/components/Inputs/SelectInput";
import TextInput from "@/components/Inputs/TextInput";
import OptionProps from "@/types/OptionsProps";
import { useState } from "react";

function BasicData(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const today = new Date().toISOString().slice(0, 10);
    const [date, setDate] = useState(today);
    
    const genders : OptionProps[] = [
        {text: "Masculino", value: "MALE"},
        {text: "Feminino", value: "FEMALE"},
        {text: "Não Binário", value: "NONBINARY"},
        {text: "Prefiro Não Informar", value: "NOTINFORMED"}
    ]
  
    return (
        <section>
            <TextInput 
                labelSide="lateral"
                labelText="Primeiro Nome"
                placeholder="primeiro nome..."
                aviso="esse será o nome do seu perfil"
                onChange={(e : any) => setFirstName(e.target.value)}
                inputValue={firstName}
            />

            <TextInput 
                labelSide="lateral"
                labelText="Sobrenome"
                placeholder="sobrenome..."
                aviso="esse será o sobrenome do seu perfil"
                onChange={(e : any) => setLastName(e.target.value)}
                inputValue={lastName}
            />

            <SelectInput
                options={genders}
                textLabel="Gênero"
                name="genero"
            />

            <DateInput
                labelText="Data de Nascimento:"
                value={date}
                onChange={setDate}
            />
        </section>
    )
}

export default BasicData;