"use client";
import { useRegister } from "@/hooks/userRegister";

import Button from "../Button/Button";
import TextInput from "../Inputs/TextInput";
import FormFields from "./FormFields";
import styles from "./Forms.module.css"
import { useRouter } from "next/navigation";
import { showSuccessMessage } from "@/services/utils/mensageHelpers";
import OptionProps from "@/types/props/OptionsProps";
import SelectInput from "@/components/Inputs/SelectInput";
import GenderEnum from "@/types/enums/GenderEnum";
import DateInput from "@/components/Inputs/DateInput";

function RegisterForm(){
    const router = useRouter();
    
    const {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        gender, 
        setGender,
        phoneNumber,
        setPhoneNumber,
        birthday,
        setBirthday,
        submit
    } = useRegister();
    
    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        const sucesso = await submit();

        if(sucesso){
            showSuccessMessage("Usuário Registrado!")
            router.replace("/login");
        }
    }

    const genders : OptionProps[] = [
        {text: "Masculino", value: "MALE"},
        {text: "Feminino", value: "FEMALE"},
        {text: "Não Binário", value: "NONBINARY"},
        {text: "Prefiro Não Informar", value: "NOTINFORMED"}
    ]

    const today = new Date().toISOString().split("T")[0];;

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <FormFields>
                <TextInput 
                    labelText="Nome"
                    labelSide="lateral" 
                    placeholder="seu nome e sobrenome"  
                    inputValue={name}
                    onChange={(e : any) => setName(e.target.value)}         
                /> 

                <TextInput 
                    labelText="Email"
                    placeholder="um e-mail válido ainda não registrado"
                    labelSide="lateral" 
                    inputValue={email}  
                    onChange={(e: any) => setEmail(e.target.value)}      
                /> 
                <TextInput 
                    labelText="Telefone"
                    placeholder="Formato: (DDD) 11111-1111"
                    labelSide="lateral"  
                    inputValue={phoneNumber ?? ""}
                    onChange={(e: any) => setPhoneNumber(e.target.value)}         
                />

                <TextInput 
                    labelText="Crie uma senha"
                    placeholder="senha de no minímo 6 caracteres"
                    labelSide="lateral"  
                    inputValue={password}
                    onChange={(e: any) => setPassword(e.target.value)}         
                />

                <SelectInput
                    options={genders}
                    textLabel="Gênero"
                    name="gender"
                    value={gender ?? GenderEnum.UNDEFINED}
                    onChange={(e: any)=> setGender(e.target.value)}
                />

                <DateInput
                    labelText="Data de Nascimento:"
                    value={birthday ? birthday.toISOString().split("T")[0] : today}
                    onChange={(value: string) => setBirthday(new Date(value))}
                />

            </FormFields>
            <Button type="submit" variant="comum"> Avançar </Button>     
        </form>
    )
}

export default RegisterForm;