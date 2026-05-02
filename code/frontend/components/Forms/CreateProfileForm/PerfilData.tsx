import ImageUpload from "@/components/Inputs/ImageInput";
import TextAreaInput from "@/components/Inputs/TextAreaInput";
import TextInput from "@/components/Inputs/TextInput";
import { Controller } from "react-hook-form";
import styles from "./CreateProfile.module.css"

function PerfilData({ form }: any){   
    return(
        <section>
            <Controller
                control={form.control}
                name="nickName"
                render={({ field }) => (
                    <TextInput
                        labelSide="lateral"
                        labelText="Apelido na plataforma"
                        onChange={field.onChange}
                        inputValue={field.value}
                        aviso="Ele é único e não pode ser o mesmo em outro perfil"
                        placeholder="@seuNome_BemIrado04"
                    />
                )}
            />

            <Controller
                control={form.control}
                name="description"
                render={({ field }) => (
                    <TextAreaInput
                        labelSide="cima"
                        labelText="Sua descrição Pessoal"
                        placeholder="fale dos seus gostos, profissões e sonhos genéricos"
                        aviso="ela estará visivel para todos os perfis"
                        value={field.value}
                        onChange={field.onChange}
                    />
                )}
            />
            

            <label className={styles.imageLabel}>
                <p>Foto de Perfil (opcional):</p>
                <Controller
                    control={form.control}
                    name="profileImage"
                    render={({ field }) => (
                        <ImageUpload
                            onChange={field.onChange}
                            value={field.value}
                        />
                    )}
                />
            </label>
        </section>
    )
}

export default PerfilData;