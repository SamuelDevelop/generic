'use client'

import { useLogin } from "@/hooks/userLogin";
import Button from "@/components/Button/Button";
import TextInput from "@/components/Inputs/TextInput/TextInput";
import FormFields from "@/components/Forms/FormFields/FormFields";
import { useRouter } from "next/navigation";
import { showErrorMessage, showSuccessMessage } from "@/services/utils/mensageHelpers";
import { useAuth } from "@/hooks/authContext";
import { getLoggedInUser } from "@/services/requests/user";
import { redirectAfterLogin } from "@/services/utils/redirect";
import PasswordInput from "@/components/Inputs/PasswordInput/PasswordInput";
import Form from "@/components/Forms/Form/Form";

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
            const data = await getLoggedInUser();
            showSuccessMessage(`Bem vindo de volta ${data.name}`);
            setUser(data);
            await redirectAfterLogin(router);
        } else {
            showErrorMessage(`${erro}`)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormFields>
                <TextInput 
                    labelText="Email"
                    labelSide="lateral"
                    placeholder="seu email de login"  
                    inputValue={login}    
                    onChange={(e : any) => setLogin(e.target.value)}   
                /> 

                <PasswordInput 
                    labelText="Senha"
                    placeholder="sua senha"
                    labelSide="lateral"  
                    inputValue={password} 
                    onChange={(e : any) => setPassword(e.target.value)}        
                /> 
            </FormFields>     

            <Button type="submit" variant="comum"> Entrar </Button>     
        </Form>
    )
}

export default LoginForm;