'use client'

import { requestLogin } from "@/services/requests/auth";
import { useState } from "react"

export function useLogin(){
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [erro, setErro] = useState("");

    function validar() {
        if (!login || !password) {
            return "preencha todos os campos";
        }

        return "";
    }

    async function submit(){
        const hasErroValidacao = validar();

        if(hasErroValidacao != ""){
            setErro(hasErroValidacao);

            return false;
        }

        try{
            await requestLogin(
                {
                    login: login,
                    password: password
                }
            )
        } catch {
            setErro("Problema ao login de usuário");
            return false;
        }

        return true;
    }

    return {
        login,
        setLogin,
        password,
        setPassword,
        erro,
        submit
    };
}