'use client'

import { useState } from "react"
import { DefaultValues, FieldValues, Resolver, useForm, UseFormReturn } from "react-hook-form"

import styles from "./FormMultiStep.module.css"
import Button from "../Button/Button"
import FormStep from "@/types/FormSteptype"

type MultiStepFormProps<T extends FieldValues> = {
    steps: FormStep<T>[],
    onSubmit: (data: any)=> void
    form: UseFormReturn<T>
    mensage?: string
}

export function FormMultiStep<T extends FieldValues>({steps, onSubmit, form, mensage} : MultiStepFormProps<T>){
    const [stepIndex, setStepIndex] = useState<number>(0);

    const CurrentStep = steps[stepIndex].component;
    const currentWidth = Math.round((stepIndex + 1)/steps.length * 100);

    async function next() {
        const fields = steps[stepIndex].fields;
        const isValid = await form.trigger(fields as any); 
        if (!isValid) return;

        setStepIndex((i) => i + 1)
    }

    function back() {
        setStepIndex((i) => i - 1)
    }

    return(
        <form onSubmit={form.handleSubmit(onSubmit)}>            
            <div className={styles.progressBar}>
                <div
                    className={styles.currentProgress}
                    style={{ width: `${currentWidth}%` }}
                >
                </div>
            </div>

            {
                mensage ?
                <p className={styles.mensage}>{mensage}</p>
                : ""
            }
            
            <section className={styles.currentStep}>
                <CurrentStep {...steps[stepIndex].props} form={form} />
            </section>
            

            <section className={styles.multiStepActions}>
                {stepIndex > 0 && (
                    <Button
                        type="button" 
                        onClick={back}
                        variant="comum"
                    >
                        Voltar
                    </Button>
                )}

                {stepIndex < steps.length - 1 && (
                    <Button
                        type="button" 
                        onClick={next}
                        variant="comum"
                    >
                        Avançar
                    </Button>
                )}

                {stepIndex === steps.length - 1 && (
                    <Button
                        type="submit" 
                        variant="comum"
                    >
                        Finalizar
                    </Button>
                )}
            </section>
        </form>
    )
}

