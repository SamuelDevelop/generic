package com.SamuelDevelop.generic.exception;

public class InsuficientAgeException extends RuntimeException{
    public InsuficientAgeException(){
        super("Idade Insuficiente para se criar um perfil");
    }
}
