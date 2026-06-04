import ValidationType from "@/types/ValidationType";

export function validation(status: boolean, message: string): ValidationType {
    return {
        status: status,
        message: message,
    };
}

export function sucessValidation(): ValidationType {
    return {
        status: true,
        message: "",
    };
}

export function validationsErrorMessage(validations: ValidationType[]): string {
    const error = validations.find((validation) => !validation.status);

    if (error) {
        return error.message;
    }

    return "";
}