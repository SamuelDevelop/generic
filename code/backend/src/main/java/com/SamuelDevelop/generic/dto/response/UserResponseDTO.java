package com.SamuelDevelop.generic.dto.response;

import java.time.LocalDate;

import com.SamuelDevelop.generic.enumeration.Gender;

public record UserResponseDTO(
    String login,
    String name,
    String role,
    Gender gender,
    LocalDate birthday
) {

}
