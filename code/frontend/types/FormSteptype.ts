import { FieldValues } from "react-hook-form";

type FormStep<T extends FieldValues>= {
    component: React.ComponentType<any>,
    fields: (keyof T)[],
    props?: any
}

export default FormStep;
