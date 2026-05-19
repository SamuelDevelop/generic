'use client'

import { useLogin } from "@/hooks/userLogin";
import Button from "../Button/Button";
import TextInput from "../Inputs/TextInput";
import FormFields from "./FormFields";
import styles from "./Forms.module.css"
import { useRouter } from "next/navigation";
import { error, success } from "@/services/mensageHelpers";
import { getProfilesByLoggedUser } from "@/services/findUserProfile";
import { useAuth } from "@/hooks/authContext";
import { getUserLogged } from "@/services/userService";
import { redirectAfterLogin } from "@/services/redirect";

function LoginForm(){
    const router = useRouter();
    const { setUser } = useAuth();

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
            success("Úsuario Logado");
            const data = await getUserLogged();
            setUser(data);
            await redirectAfterLogin(router);
        } else {
            error(`${erro}`)
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

            <Button type="submit" variant="comum"> Entrar </Button>     
        </form>
    )
}

export default LoginForm;