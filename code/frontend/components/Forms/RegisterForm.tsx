import Button from "../Button/Button";
import TextInput from "../Inputs/TextInput";
import FormFields from "./FormFields";
import styles from "./Forms.module.css"

function RegisterForm(){
    return (
        <form className={styles.form}>
            <FormFields>
                <TextInput 
                    labelText="Digite um nome"
                    labelSide="lateral" 
                    placeholder="seu nome e sobrenome"
                    aviso="este nome será o nome do seu perfil na plataforma"           
                /> 

                <TextInput 
                    labelText="Digite seu email"
                    placeholder="um e-mail válido ainda não registrado"
                    labelSide="lateral"           
                /> 

                <TextInput 
                    labelText="Crie uma senha"
                    placeholder="senha de no minímo 6 caracteres"
                    labelSide="lateral"           
                />
            </FormFields>
            
            <Button type="comum"> Avançar </Button>     
        </form>
    )
}

export default RegisterForm;