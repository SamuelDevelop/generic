import GenderEnum from "@/types/enums/GenderEnum";
import { sucessValidation, validation } from "./createValidation";

export function validatePassword(password: string, soft: boolean = false) {
    if (password.length < 6 || (password.length > 64 && soft)) {
        return validation(false, "Dados inválidos");
    }

    if (password.length < 8) {
        return validation(false, "A senha deve possuir 6 caracteres");
    }

    if (password.length > 100) {
        return validation(false, "Senha muito longa");
    }

    return sucessValidation();
}

export function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return validation(false, "Email inválido");
    }

    return sucessValidation();
}

export function validatePhone(phone: string) {
    const phoneRegex = /^\(\d{2}\)\s?\d{5}-\d{4}$/;

    if (!phoneRegex.test(phone)) {
        return validation(
            false,
            "Telefone inválido. Use o formato: (DDD) 99999-9999",
        );
    }

    return sucessValidation();
}

export function validateGender(gender : GenderEnum){
    if(gender == GenderEnum.UNDEFINED){
        return validation(
            false,
            "Escolha algum gênero"
        )
    }

    return sucessValidation();
}