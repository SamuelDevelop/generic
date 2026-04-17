import Button from "../Button/Button";
import TextInput from "../Inputs/TextInput";
import FormFields from "./FormFields";
import styles from "./Forms.module.css"

function LoginForm(){
    
    return (
        <form className={styles.form}>
            <FormFields>
                <TextInput 
                    labelText="E-mail"
                    labelSide="lateral"
                    placeholder="seu email de login"         
                /> 

                <TextInput 
                    labelText="Senha"
                    placeholder="sua senha"
                    labelSide="lateral"           
                /> 
            </FormFields>            

            <Button type="submit" variant="comum"> Entrar </Button>     
        </form>
    )
}

export default LoginForm;