package com.SamuelDevelop.generic.service;

import java.io.IOException;
import org.springframework.stereotype.Service;

import com.SamuelDevelop.generic.dto.request.ProfileDTO;
import com.SamuelDevelop.generic.entity.Profile;
import com.SamuelDevelop.generic.entity.User;
import com.SamuelDevelop.generic.enumeration.ProfileStatus;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProfileService {
    private final AuthenticatedUserService authenticatedUserService;

    public Profile toEntity(ProfileDTO dto){
        Profile entity = new Profile();
        
        User user = authenticatedUserService.getCurrentUser();
        
        entity.setUser(user);
        entity.setNickname(dto.nickname());
        entity.setFirstname(dto.firstname());
        entity.setLastname(dto.lastname());
        entity.setDescription(dto.description());
        entity.setStatus(ProfileStatus.ACTIVE);
        
        if (dto.personalImage() != null && !dto.personalImage().isEmpty()) {
            try {
                entity.setProfileImage(dto.personalImage().getBytes());
            } catch (IOException e) {
                throw new RuntimeException("Image processing failed");
            }
        }
        else {
            entity.setProfileImage(null);
        }

        return entity;
    }
}
