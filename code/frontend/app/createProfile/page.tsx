"use client"
import { useAuth } from "@/components/authContext";
import { FormMultiStep } from "@/components/Forms/FormMultiStep";
import TextInput from "@/components/Inputs/TextInput";
import SimpleContainer from "@/components/SimpleContainer/SimpleContainer";
import FormStep from "@/types/FormSteptype";

function test(){
    console.log("testado!");
}

function CreateProfilePage(){
    const { user, logged, loading } = useAuth();

    if (loading) return <p>Carregando...</p>;

    if (!logged || !user) {
        return <p>Não está logado</p>;
    }

    const steps: FormStep[] = [
        {
            component: TextInput,
            props: {
                labelText: "Primeiro Nome",
                labelSide: "lateral"
            },
            fields: ["Primeiro Nome"]
        },
        {
            component: TextInput,
            props: {
                labelText: "Resto do Nome",
                labelSide: "lateral"
            },
            fields: ["Resto do Nome"]
        }
    ]

    return (
        <main className="allScreen">
            <SimpleContainer>
                <h1>Estamos quase lá...</h1>
                <p>{user.name} agora vamos criar um perfil pessoal.</p>
                <FormMultiStep 
                    steps={steps}
                    onSubmit={test}
                />    
            </SimpleContainer>  
        </main>
    )
}

export default CreateProfilePage;