package com.SamuelDevelop.generic.exception;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<String> handleConstraint(
            DataIntegrityViolationException ex
    ) {

        if (ex.getMessage().contains("nick_name")) {
            return ResponseEntity
                    .badRequest()
                    .body("Esse Apelido já está sendo usado por outro úsuario na plataforma tente outro.");
        }

        return ResponseEntity
                .badRequest()
                .body("Verifique o preenchimento correto dos dados, e tente novamente.");
    }
}
