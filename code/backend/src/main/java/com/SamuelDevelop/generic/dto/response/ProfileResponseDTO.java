package com.SamuelDevelop.generic.dto.response;

import java.time.LocalDate;

import com.SamuelDevelop.generic.enumeration.Gender;

public record ProfileResponseDTO(
    String nickName,
    String firstName,
    String lastName,
    String description,
    byte[] profileImage,
    Gender gender,
    LocalDate birthday
) {}
