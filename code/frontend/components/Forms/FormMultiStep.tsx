'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"

import styles from "./FormMultiStep.module.css"
import Button from "../Button/Button"

type Step = {
    component: any,
    fields: string[]
}

type MultiStepFormProps = {
    steps: Step[],
    onSubmit: (data: any)=> void
}

export function FormMultiStep({steps, onSubmit} : MultiStepFormProps){
    const [stepIndex, setStepIndex] = useState<number>(0);

    const form = useForm({
        mode: "onTouched"
    });

    const CurrentStep = steps[stepIndex].component;

    async function next() {
        const fields = steps[stepIndex].fields
        const valid = await form.trigger(fields)
        if (!valid) return
        setStepIndex((i) => i + 1)
    }

    function back() {
        setStepIndex((i) => i - 1)
    }

    return(
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <p>Progresso: {steps.length}/{stepIndex}</p>
            
            <CurrentStep form={form}/>

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

