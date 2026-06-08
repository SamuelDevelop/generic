import TextInput from "@/components/Inputs/TextInput";
import { Controller } from "react-hook-form";
import styles from "./CreateProfile.module.css"
import TextAreaInput from "@/components/Inputs/TextAreaInput/TextAreaInput";

function BasicData({ form }: any){  
    return (
        <section className={styles.basicData}>
            <div className={styles.sideFields}>
                <Controller
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <TextInput 
                            labelSide="lateral"
                            labelText="Primeiro Nome"
                            placeholder="primeiro nome..."
                            onChange={field.onChange}
                            inputValue={field.value}
                        />
                    )}
                />
                
                <Controller 
                    control={form.control}
                    name="lastName"  
                    render={({field}) => (
                        <TextInput 
                            labelSide="lateral"
                            labelText="Sobrenome"
                            placeholder="sobrenome..."
                            onChange={field.onChange}
                            inputValue={field.value}
                        />
                    )}           
                />
            </div>   

            <Controller
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <TextAreaInput
                            labelSide="cima"
                            labelText="Sua descrição Pessoal"
                            placeholder="fale dos seus gostos, profissões e sonhos genéricos"
                            value={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />          
        </section>
    )
}

export default BasicData;