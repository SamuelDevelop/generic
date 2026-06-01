package com.SamuelDevelop.generic.dto.response;

public record ProfileResponseDTO(
    String nickName,
    String firstName,
    String lastName,
    String description,
    byte[] profileImage
) {}
