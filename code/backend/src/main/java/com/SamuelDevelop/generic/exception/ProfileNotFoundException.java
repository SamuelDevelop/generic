package com.SamuelDevelop.generic.exception;

public class ProfileNotFoundException extends RuntimeException{
    public ProfileNotFoundException(){
        super("Perfil não encontrado");
    }

    public ProfileNotFoundException(String perfil){
        super("Perfil:" + perfil + "não encontrado");
    }
}
