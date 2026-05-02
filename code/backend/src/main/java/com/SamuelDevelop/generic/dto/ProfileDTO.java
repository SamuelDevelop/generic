package com.SamuelDevelop.generic.dto;

import org.springframework.web.multipart.MultipartFile;

import com.SamuelDevelop.generic.enums.Gender;

public record ProfileDTO(
    String userLogin,
    String nickName,
    String firstName,
    String lastName,
    String description,
    MultipartFile personalImage,
    Gender gender,
    String birthday
) {
    
}
