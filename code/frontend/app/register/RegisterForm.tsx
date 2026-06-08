"use client";
import { useRegister } from "@/hooks/userRegister";

import Button from "@/components/Button/Button";
import TextInput from "@/components/Inputs/TextInput/TextInput";
import FormFields from "@/components/Forms/FormFields/FormFields";
import { useRouter } from "next/navigation";
import { showSuccessMessage } from "@/services/utils/mensageHelpers";
import OptionProps from "@/types/props/OptionsProps";
import SelectInput from "@/components/Inputs/SelectInput/SelectInput";
import GenderEnum from "@/types/enums/GenderEnum";
import DateInput from "@/components/Inputs/DateInput/DateInput";
import Form from "@/components/Forms/Form/Form";
import PasswordInput from "@/components/Inputs/PasswordInput/PasswordInput";

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
        <Form onSubmit={handleSubmit}>
            <FormFields>
                <TextInput 
                    labelText="Nome"
                    labelSide="lateral" 
                    placeholder="seu nome e sobrenome"  
                    inputValue={name}
                    onChange={(e : any) => setName(e.target.value)}         
                /> 
                <FormFields orientation="row">
                    <SelectInput
                        options={genders}
                        textLabel="Gênero"
                        name="gender"
                        value={gender ?? GenderEnum.MALE}
                        onChange={(e: any)=> setGender(e.target.value)}
                    />

                    <DateInput
                        labelText="Data de Nascimento:"
                        value={birthday ? birthday.toISOString().split("T")[0] : today}
                        onChange={(value: string) => setBirthday(new Date(value))}
                    />
                </FormFields>
                <TextInput 
                    labelText="Telefone"
                    placeholder="Formato: (DDD) 11111-1111"
                    labelSide="lateral"  
                    inputValue={phoneNumber ?? ""}
                    onChange={(e: any) => setPhoneNumber(e.target.value)}         
                />

                <TextInput 
                    labelText="Email"
                    placeholder="um e-mail válido"
                    labelSide="lateral" 
                    inputValue={email}  
                    onChange={(e: any) => setEmail(e.target.value)}      
                /> 
                <FormFields orientation="row">
                    <PasswordInput 
                        labelText="Senha"
                        labelSide="cima"  
                        inputValue={password}
                        onChange={(e: any) => setPassword(e.target.value)}         
                    />
                    <PasswordInput 
                        labelText="Confirme a Senha"
                        labelSide="cima"  
                        inputValue={password}
                        onChange={(e: any) => setPassword(e.target.value)}         
                    />
                </FormFields>

            </FormFields>
            <Button type="submit" variant="comum"> Avançar </Button>     
        </Form>
    )
}

export default RegisterForm;