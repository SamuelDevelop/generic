import SelectInput from "@/components/Inputs/SelectInput";
import TextInput from "@/components/Inputs/TextInput";
import OptionProps from "@/types/OptionsProps";

function BasicData(){
    
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
            />

            <TextInput 
                labelSide="lateral"
                labelText="Sobrenome"
                placeholder="sobrenome..."
                aviso="esse será o sobrenome do seu perfil"
            />

            <SelectInput
                options={genders}
                textLabel="Gênero"
                name="genero"
            />
        </section>
    )
}

export default BasicData;