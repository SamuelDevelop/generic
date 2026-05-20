"use client"
import { useAuth } from "@/hooks/authContext";
import BasicData from "@/components/Forms/CreateProfileForm/BasicData";
import PerfilData from "@/components/Forms/CreateProfileForm/PerfilData";
import { FormMultiStep } from "@/components/Forms/FormMultiStep/FormMultiStep";
import SimpleContainer from "@/components/SimpleContainer/SimpleContainer";
import FormStep from "@/types/FormSteptype";
import { useForm } from "react-hook-form";
import { schema } from "@/components/Forms/CreateProfileForm/formSchema"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { requestCreateProfile } from "@/services/requests/profile";
import { showErrorMessage } from "@/services/utils/mensageHelpers";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { redirectToFeed } from "@/services/utils/redirect";
import { useRouter } from "next/navigation";

type DadosFormulario = z.infer<typeof schema>


function CreateProfilePage(){
    const router = useRouter();

    async function submit(
        data: DadosFormulario,
    ){
        if(data.gender === "UNDEFINED"){
            showErrorMessage("Selecione um genero válido");
        }

        const response = await requestCreateProfile({
            ...data,
            birthday: new Date(data.birthday),
            gender: data.gender
        });

        console.log(response);

        if(response.ok){
            router.push("/profile/select");
        }
    }

    const form = useForm<DadosFormulario>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            birthday: "",
            gender: "MALE",
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
    const mensage = `${user.name} agora vamos criar um perfil pessoal.`;
    return (
        <main className="allScreen">
            <SimpleContainer>
                <h1>Vamos criar seu perfil pessoal</h1>

                <FormMultiStep 
                    steps={steps}
                    onSubmit={submit}
                    form={form}
                    mensage={mensage}
                />    
            </SimpleContainer>  
        </main>
    )
}

export default CreateProfilePage;
