import RegisterForm from "@/components/Forms/RegisterForm";
import Main from "@/components/Main/Main";
import TwoPartSection from "@/components/TwoPartSection/TwoPartSection";

function RegisterPage(){
    return(
        <>
            <Main orientation="centralized">
                <TwoPartSection
                    image={"/images/ideias/conectada.jpg"}
                >
                    <h1>Se Registrar</h1>
                    <RegisterForm />
                    <br></br>
                    <a href="/login">Já possui uma conta? Entrar</a>
                </TwoPartSection>
                
            </Main>
        </>
    )
}

export default RegisterPage;