import LoginForm from "@/components/Forms/LoginForm";
import Main from "@/components/Main/Main";
import TwoPartSection from "@/components/TwoPartSection/TwoPartSection";

function LoginPage(){
    return (
        <Main orientation="centralized">
            <TwoPartSection
                image={"/images/landscape/entrance.jpg"}
            >
                <h1>Entrar no Generic:</h1>
                <LoginForm />
                <br></br>
                <a href="/register">Não possui uma conta? Registrar</a>
            </TwoPartSection>
        </Main>
    )
}

export default LoginPage;