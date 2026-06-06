package com.SamuelDevelop.generic.dto.request;

import org.springframework.web.multipart.MultipartFile;

public record ProfileDTO(
    String nickname,
    String firstname,
    String lastname,
    String description,
    MultipartFile personalImage
) {
    
}
