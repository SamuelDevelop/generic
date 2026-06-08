import ImageUpload from "@/components/Inputs/ImageInput/ImageInput";
import TextInput from "@/components/Inputs/TextInput";
import { Controller } from "react-hook-form";
import styles from "./CreateProfile.module.css"

function PerfilData({ form }: any){   
    return(
        <section className={styles.perfilData}>
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