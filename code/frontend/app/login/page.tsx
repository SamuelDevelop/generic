import LoginForm from "@/components/Forms/LoginForm";
import TwoPartSection from "@/components/TwoPartSection/TwoPartSection";
import conectivyImage from "@/assets/images/landscape_photos/entrance.jpg"

function LoginPage(){
    return (
        <main className="allScreen">
            <TwoPartSection
                image={conectivyImage}
            >
                <h1>Login:</h1>
                <LoginForm />
                <br></br>
                <a href="/register">Não possui uma conta? Registrar</a>
            </TwoPartSection>
            
        </main>
    )
}

export default LoginPage;