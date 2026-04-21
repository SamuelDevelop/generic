"use client"
import { useAuth } from "@/components/authContext";
import TwoPartSection from "@/components/TwoPartSection/TwoPartSection";

function CreateProfilePage(){
    const { user, logged, loading } = useAuth();

    if (loading) return <p>Carregando...</p>;

    if (!logged || !user) {
        return <p>Não está logado</p>;
    }

    return (
        <main className="allScreen">
            <TwoPartSection
                image={"/images/landscape/entrance.jpg"}
            >
                <h1>Bem vindo {user.name}</h1>
            </TwoPartSection>
            
        </main>
    )
}

export default CreateProfilePage;