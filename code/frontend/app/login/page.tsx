import LoginForm from "@/components/Forms/LoginForm";
import TwoPartSection from "@/components/TwoPartSection/TwoPartSection";

function LoginPage(){
    return (
        <main className="allScreen">
            <TwoPartSection
                image={"/images/landscape/entrance.jpg"}
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