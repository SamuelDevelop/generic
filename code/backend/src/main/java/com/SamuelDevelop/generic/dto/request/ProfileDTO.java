package com.SamuelDevelop.generic.dto.request;

import org.springframework.web.multipart.MultipartFile;

public record ProfileDTO(
    String userLogin,
    String nickName,
    String firstName,
    String lastName,
    String description,
    MultipartFile personalImage
) {
    
}
