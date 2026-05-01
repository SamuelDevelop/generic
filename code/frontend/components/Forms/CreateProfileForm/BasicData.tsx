import DateInput from "@/components/Inputs/DateInput";
import SelectInput from "@/components/Inputs/SelectInput";
import TextInput from "@/components/Inputs/TextInput";
import OptionProps from "@/types/OptionsProps";
import { Controller } from "react-hook-form";

function BasicData({ form }: any){
    const today = new Date().toISOString().slice(0, 10);

    const genders : OptionProps[] = [
        {text: "Masculino", value: "MALE"},
        {text: "Feminino", value: "FEMALE"},
        {text: "Não Binário", value: "NONBINARY"},
        {text: "Prefiro Não Informar", value: "NOTINFORMED"}
    ]
  
    return (
        <section>
            <Controller
                control={form.control}
                name="firstName"
                render={({ field }) => (
                    <TextInput 
                        labelSide="lateral"
                        labelText="Primeiro Nome"
                        placeholder="primeiro nome..."
                        aviso="esse será o nome do seu perfil"
                        onChange={field.onChange}
                        inputValue={field.value}
                    />
                )}
            />
            
            <Controller 
                control={form.control}
                name="lastName"  
                render={({field}) => (
                    <TextInput 
                        labelSide="lateral"
                        labelText="Sobrenome"
                        placeholder="sobrenome..."
                        aviso="esse será o sobrenome do seu perfil"
                        onChange={field.onChange}
                        inputValue={field.value}
                    />
                )}           
            />

            <Controller
                control={form.control}
                name="gender"
                defaultValue={"UNDEFINED"}
                render={({field}) => (
                    <SelectInput
                        options={genders}
                        textLabel="Gênero"
                        name="gender"
                        onChange={field.onChange}
                        value={field.value}
                    />
                )}
            />

            <Controller
                control={form.control}
                name="birthday"
                defaultValue={today}
                render={({ field }) => (
                    <DateInput
                        labelText="Data de Nascimento:"
                        value={field.value}
                        onChange={field.onChange}
                    />
                )}
            />
        </section>
    )
}

export default BasicData;