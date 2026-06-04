package com.SamuelDevelop.generic.dto.request;

import java.time.LocalDate;

import com.SamuelDevelop.generic.enumeration.Gender;
import com.SamuelDevelop.generic.enumeration.UserRole;

public record RegisterDTO(
    String email, 
    String password, 
    UserRole role, 
    String name,
    Gender gender, 
    LocalDate birthday,
    String phoneNumber
){
}
