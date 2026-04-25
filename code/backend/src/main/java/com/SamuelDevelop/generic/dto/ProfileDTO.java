package com.SamuelDevelop.generic.dto;

import java.time.LocalDate;

import com.SamuelDevelop.generic.enums.Gender;

public record ProfileDTO(
    long userId,
    long profileId,
    String nickName,
    String firstName,
    String lastName,
    String description,
    byte[] personalImage,
    Gender gender,
    LocalDate birthday
) {
    
}
