"use client"
import { useAuth } from "@/components/authContext";
import BasicData from "@/components/Forms/CreateProfileForm/BasicData";
import PerfilData from "@/components/Forms/CreateProfileForm/PerfilData";
import { FormMultiStep } from "@/components/Forms/FormMultiStep";
import SimpleContainer from "@/components/SimpleContainer/SimpleContainer";
import FormStep from "@/types/FormSteptype";
import { useForm } from "react-hook-form";
import { schema } from "@/components/Forms/CreateProfileForm/formSchema"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

function test(data: FormData){
    console.log(data);
}

function CreateProfilePage(){
    const { user, logged, loading } = useAuth();

    if (loading) return <p>Carregando...</p>;

    if (!logged || !user) {
        return <p>Não está logado</p>;
    }

    const steps: FormStep<FormData>[] = [
        {
            component: BasicData,
            fields: ["firstName", "lastName", "birthday", "gender"]
        },
        {
            component: PerfilData,
            fields: ["nickName", "description", "profileImage"]
        }
    ]

    type FormData = z.infer<typeof schema>

    const form = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            birthday: "",
            gender: "UNDEFINED",
            description: "",
            nickName: "",
            profileImage: undefined
        }
    })

    return (
        <main className="allScreen">
            <SimpleContainer>
                <h1>Estamos quase lá...</h1>
                <p>{user.name} agora vamos criar um perfil pessoal.</p>
                <FormMultiStep 
                    steps={steps}
                    onSubmit={test}
                    form={form}
                />    
            </SimpleContainer>  
        </main>
    )
}

export default CreateProfilePage;
