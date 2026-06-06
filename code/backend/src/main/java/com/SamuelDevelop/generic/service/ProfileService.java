package com.SamuelDevelop.generic.service;

import java.io.IOException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.SamuelDevelop.generic.dto.request.ProfileDTO;
import com.SamuelDevelop.generic.dto.response.ProfileResponseDTO;
import com.SamuelDevelop.generic.entity.Profile;
import com.SamuelDevelop.generic.entity.User;
import com.SamuelDevelop.generic.enumeration.ProfileStatus;
import com.SamuelDevelop.generic.exception.MaxProfilesReachedException;
import com.SamuelDevelop.generic.repostories.ProfileRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProfileService {
    private final AuthenticatedUserService authenticatedUserService;
    private final ProfileRepository profileRepository;
    private static final int USER_PROFILES_LIMIT = 3;

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

    public ProfileResponseDTO toResponseDTO(Profile p){
        ProfileResponseDTO profileResponseDTO = new ProfileResponseDTO(
            p.getNickname(),
            p.getFirstname(),
            p.getLastname(),
            p.getDescription(),
            p.getProfileImage()
        );

        return profileResponseDTO;
    }

    @Transactional
    public void createProfile(ProfileDTO dto) {
        User user = authenticatedUserService.getCurrentUser();

        if (profileRepository.countByUserId(user.getId()) >= USER_PROFILES_LIMIT) {
            throw new MaxProfilesReachedException();
        }

        Profile profile = this.toEntity(dto);

        profileRepository.save(profile);
    }
}
