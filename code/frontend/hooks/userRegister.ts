'use client'
import { requestRegister } from "@/services/register";
import { useState } from "react";

export function useRegister(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [erro, setErro] = useState("");

    function validar() {
        if (!nome || !email || !senha) {
            return "Preencha todos os campos";
        }

        if (senha.length < 6) {
            return "Senha precisa ter no mínimo 6 caracteres";
        }

        if(!email.includes("@") || !email.includes(".")){
            return "Digite um email válido";
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
            return false;
        }
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