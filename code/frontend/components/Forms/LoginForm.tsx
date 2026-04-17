'use client'

import { useLogin } from "@/hooks/userLogin";
import Button from "../Button/Button";
import TextInput from "../Inputs/TextInput";
import FormFields from "./FormFields";
import styles from "./Forms.module.css"

function LoginForm(){
    const {
        login,
        setLogin,
        password,
        setPassword,
        erro,
        submit
    } = useLogin();

    async function handleSubmit(e : React.FormEvent) {
        e.preventDefault();

        const sucesso = await submit();

        if(sucesso){
            console.log("Usuário logado");
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <FormFields>
                <TextInput 
                    labelText="E-mail"
                    labelSide="lateral"
                    placeholder="seu email de login"  
                    inputValue={login}    
                    onChange={(e : any) => setLogin(e.target.value)}   
                /> 

                <TextInput 
                    labelText="Senha"
                    placeholder="sua senha"
                    labelSide="lateral"  
                    inputValue={password} 
                    onChange={(e : any) => setPassword(e.target.value)}        
                /> 
            </FormFields>     

            {erro && <p><i>{erro}</i></p>}     

            <Button type="submit" variant="comum"> Entrar </Button>     
        </form>
    )
}

export default LoginForm;