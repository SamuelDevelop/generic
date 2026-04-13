import RegisterForm from "@/components/Forms/RegisterForm";
import conectivyImage from "@/assets/images/conectada.jpg"
import TwoPartSection from "@/components/TwoPartSection/TwoPartSection";

function RegisterPage(){
    return(
        <>
            <main className="allScreen">
                <TwoPartSection
                    image={conectivyImage}
                >
                    <h1>Registrar-se</h1>
                    <RegisterForm />
                    <br></br>
                    <a href="/login">Já possui uma conta? Entrar</a>
                </TwoPartSection>
                
            </main>
        </>
    )
}

export default RegisterPage;