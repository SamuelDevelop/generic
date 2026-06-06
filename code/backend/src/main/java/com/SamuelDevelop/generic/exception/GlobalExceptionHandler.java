package com.SamuelDevelop.generic.exception;

import java.time.LocalDateTime;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.SamuelDevelop.generic.dto.response.ErrorResponseDTO;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

        @ExceptionHandler(DataIntegrityViolationException.class)
        public ResponseEntity<ErrorResponseDTO> handleConstraint(
                        DataIntegrityViolationException ex) {
                String message = "Verifique os dados enviados.";

                Throwable rootCause = ex.getRootCause();

                if (rootCause != null &&
                                rootCause.getMessage() != null &&
                                rootCause.getMessage().contains("nick_name")) {

                        message = "Esse apelido já está sendo usado.";
                }

                ErrorResponseDTO error = new ErrorResponseDTO(
                                HttpStatus.BAD_REQUEST.value(),
                                message,
                                LocalDateTime.now());

                return ResponseEntity
                                .badRequest()
                                .body(error);
        }

        @ExceptionHandler(InsuficientAgeException.class)
        public ResponseEntity<ErrorResponseDTO> handleInsuficientAge(InsuficientAgeException ex) {

                ErrorResponseDTO error = new ErrorResponseDTO(
                        HttpStatus.BAD_REQUEST.value(),
                        ex.getMessage(),
                        LocalDateTime.now()
                );

                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(error);
        }

        @ExceptionHandler(MaxProfilesReachedException.class)
        public ResponseEntity<ErrorResponseDTO> maxProfilesReachedException(MaxProfilesReachedException ex) {

                ErrorResponseDTO error = new ErrorResponseDTO(
                        HttpStatus.BAD_REQUEST.value(),
                        ex.getMessage(),
                        LocalDateTime.now()
                );

                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(error);
        }
}
