package com.SamuelDevelop.generic.dto.response;

public record ProfileResponseDTO(
    String nickname,
    String firstname,
    String lastname,
    String description,
    byte[] profileImage
) {}
