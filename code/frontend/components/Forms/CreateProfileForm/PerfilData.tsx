import ImageUpload from "@/components/Inputs/ImageInput";
import TextAreaInput from "@/components/Inputs/TextAreaInput";
import TextInput from "@/components/Inputs/TextInput";
import { useState } from "react";

function PerfilData(){
    const [nickName, setNickName] = useState<string>("");
    
    return(
        <section>
            <TextInput
                labelSide="lateral"
                labelText="Apelido na plataforma"
                onChange={(e : any) => setNickName(e.target.value)}
                inputValue={nickName}
                aviso="Ele é único e não pode ser o mesmo em outro perfil"
            />

            <TextAreaInput
                labelSide="cima"
                labelText="Sua descrição Pessoal"
                placeholder="fale dos seus gostos, profissões e sonhos genéricos"
                aviso="ela estará visivel para todos os perfis"
            />

            <label>
                <p>Foto de Perfil (opcional):</p>
                <ImageUpload/>
            </label>
        </section>
    )
}

export default PerfilData;