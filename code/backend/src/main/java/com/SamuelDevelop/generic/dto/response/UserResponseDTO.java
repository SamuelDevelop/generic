package com.SamuelDevelop.generic.dto.response;

import java.time.LocalDate;

import com.SamuelDevelop.generic.enumeration.Gender;
import com.SamuelDevelop.generic.enumeration.UserRole;

public record UserResponseDTO(
    String login,
    String name,
    UserRole role,
    Gender gender,
    LocalDate birthday
) {

}
