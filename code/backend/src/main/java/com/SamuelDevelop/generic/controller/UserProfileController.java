package com.SamuelDevelop.generic.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SamuelDevelop.generic.dto.response.ProfileResponseDTO;
import com.SamuelDevelop.generic.entity.Profile;
import com.SamuelDevelop.generic.entity.User;
import com.SamuelDevelop.generic.enumeration.ProfileStatus;
import com.SamuelDevelop.generic.repostories.ProfileRepository;
import com.SamuelDevelop.generic.repostories.UserRepository;
import com.SamuelDevelop.generic.service.AuthenticatedUserService;
import com.SamuelDevelop.generic.service.ProfileService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("profiles/my")
public class UserProfileController {
    private final UserRepository userRepository;
    private final AuthenticatedUserService authenticatedUserService;
    private final ProfileRepository profileRepository;
    private final ProfileService profileService;

    @GetMapping("/list")
    public List<ProfileResponseDTO> getAuthenticatedUserProfiles(){
        User owner = authenticatedUserService.getCurrentUser();
        
        return profileRepository.findByUserIdAndStatus(owner.getId(), ProfileStatus.ACTIVE)
            .stream()
            .map(profile -> profileService.toResponseDTO(profile)).toList();
    }

    @GetMapping("/select/{nickname}")
    public ResponseEntity<Void> setActiveProfile(
            @PathVariable String nickname) {

        User user = authenticatedUserService.getCurrentUser();

        Profile profile = profileRepository.findByNickname(nickname);

        if(profile.getUser().getId() != user.getId() || profile.getStatus() == ProfileStatus.BANNED || profile.getStatus() == ProfileStatus.DISABLED) {
            return ResponseEntity.status(403).build();
        }

        user.setActiveProfile(profile);

        userRepository.save(user);

        return ResponseEntity.ok().build();
    }

    @GetMapping("/selected")
    public ProfileResponseDTO getActiveProfile() {
        User user = authenticatedUserService.getCurrentUser();

        Profile profile = user.getActiveProfile();

        return profileService.toResponseDTO(profile);
    }
}
