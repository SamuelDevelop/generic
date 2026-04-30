"use client";
import { useRegister } from "@/hooks/userRegister";

import Button from "../Button/Button";
import TextInput from "../Inputs/TextInput";
import FormFields from "./FormFields";
import styles from "./Forms.module.css"

function RegisterForm(){
    const {
        nome,
        setNome,
        email,
        setEmail,
        senha,
        setSenha,
        erro,
        submit
    } = useRegister();
    
    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        const sucesso = await submit();

        if(sucesso){
            console.log("Usuário registrado");
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <FormFields>
                <TextInput 
                    labelText="Digite um nome"
                    labelSide="lateral" 
                    placeholder="seu nome e sobrenome"  
                    inputValue={nome}
                    onChange={(e : any) => setNome(e.target.value)}         
                /> 

                <TextInput 
                    labelText="Digite seu email"
                    placeholder="um e-mail válido ainda não registrado"
                    labelSide="lateral" 
                    inputValue={email}  
                    onChange={(e: any) => setEmail(e.target.value)}      
                /> 

                <TextInput 
                    labelText="Crie uma senha"
                    placeholder="senha de no minímo 6 caracteres"
                    labelSide="lateral"  
                    inputValue={senha}
                    onChange={(e: any) => setSenha(e.target.value)}         
                />
            </FormFields>
            
            {erro && <p><i>{erro}</i></p>}

            <Button type="submit" variant="comum"> Avançar </Button>     
        </form>
    )
}

export default RegisterForm;