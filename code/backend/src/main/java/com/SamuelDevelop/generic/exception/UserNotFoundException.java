package com.SamuelDevelop.generic.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(){
        super("Usuário não encontrado");
    }

    public UserNotFoundException(String local){
        super("Usuário não encontrado em" + local);
    }
}
