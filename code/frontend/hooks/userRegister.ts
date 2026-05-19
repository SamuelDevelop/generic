'use client'
import { showErrorMessage } from "@/services/utils/mensageHelpers";
import { requestRegister } from "@/services/requests/auth";
import { useState } from "react";

export function useRegister(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [erro, setErro] = useState("");

    function validar() {
        if (!nome || !email || !senha) {
            showErrorMessage("Preencha todos os campos");
            return "Preencha todos os campos";
        }

        if (senha.length < 6) {
            showErrorMessage("Senha precisa ter no mínimo 6 caracteres");
            return "Senha precisa ter no mínimo 6 caracteres";
        }

        if(!email.includes("@") || !email.includes(".")){
            showErrorMessage("Digite um email válido");
            return "Senha precisa ter no mínimo 6 caracteres";
        }

        return "";
    }

    async function submit() {
        const hasErroValidacao = validar();

        if(hasErroValidacao != ""){
            setErro(hasErroValidacao);

            return false;
        }

        try {
            await requestRegister(
                {
                    nome : nome,
                    email : email,
                    role : "USER",
                    password : senha
                }
            )
        } catch {
            setErro("Problema ao registrar usuário");
            showErrorMessage("Problema ao registrar usuário, tente novamente.");
            return false;
        }

        return true
    }

    return {
        nome,
        setNome,
        email,
        setEmail,
        senha,
        setSenha,
        erro,
        submit
    };
}