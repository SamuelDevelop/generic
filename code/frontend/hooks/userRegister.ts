'use client'
import { showErrorMessage } from "@/services/utils/mensageHelpers";
import { requestRegister } from "@/services/requests/auth";
import { useState } from "react";
import GenderEnum from "@/types/enums/GenderEnum";
import { validateEmail, validateGender, validatePassword, validatePhone } from "@/services/validations/comumValidations";
import { validationsErrorMessage } from "@/services/validations/createValidation";
import UserRoleEnum from "@/types/enums/UserRolesEnum";

export function useRegister(){
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [gender, setGender] = useState<GenderEnum>(GenderEnum.UNDEFINED);
    const [phoneNumber, setPhoneNumber] = useState<string | null>("");
    const [birthday, setBirthday] = useState<Date>();

    const [erro, setErro] = useState("");

    function validar() {
        if (!name || !email || !password || !gender || !birthday) {
            showErrorMessage("Preencha todos os campos");
            return "Preencha todos os campos";
        }

        const validations = [
            validateEmail(email),
            validatePassword(password),
            validateGender(gender)
        ];

        if(phoneNumber != null){
            validations.push(validatePhone(phoneNumber))
        }

        const issue = validationsErrorMessage(validations);

        if(issue != ""){
            showErrorMessage(issue);
        }

        return issue;
    }

    async function submit() {
        const hasErroValidacao = validar();

        if(hasErroValidacao != ""){
            setErro(hasErroValidacao);

            return false;
        }

        try {
            if(birthday){ // I didn't set a default birthday date, so i needed to check this here
                await requestRegister(
                    {
                        name : name,
                        email : email,
                        password : password,
                        role : UserRoleEnum.USER,
                        gender: gender,
                        birthday: birthday,
                        phoneNumber: phoneNumber
                    }
                )
            }
        } catch {
            setErro("Problema ao registrar usuário");
            showErrorMessage("Problema ao registrar usuário, tente novamente.");
            return false;
        }

        return true
    }

    return {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        gender, 
        setGender,
        phoneNumber,
        setPhoneNumber,
        birthday,
        setBirthday,
        erro,
        submit
    };
}