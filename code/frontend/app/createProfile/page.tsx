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
import { requestCreateProfile } from "@/services/createProfile";

type DadosFormulario = z.infer<typeof schema>

async function submit(data: DadosFormulario){
    
    if(data.gender === "UNDEFINED"){
        throw new Error("Selecione um gênero válido");
    }

    const response = await requestCreateProfile({
        ...data,
        birthday: new Date(data.birthday),
        gender: data.gender
    });

    console.log(response);
}

function CreateProfilePage(){
    const form = useForm<DadosFormulario>({
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

    return (
        <main className="allScreen">
            <SimpleContainer>
                <h1>Estamos quase lá...</h1>
                <p>{user.name} agora vamos criar um perfil pessoal.</p>
                <FormMultiStep 
                    steps={steps}
                    onSubmit={submit}
                    form={form}
                />    
            </SimpleContainer>  
        </main>
    )
}

export default CreateProfilePage;
