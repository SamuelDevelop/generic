package com.SamuelDevelop.generic.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SamuelDevelop.generic.dto.request.ProfileDTO;
import com.SamuelDevelop.generic.dto.response.ProfileResponseDTO;
import com.SamuelDevelop.generic.entity.Profile;
import com.SamuelDevelop.generic.entity.User;
import com.SamuelDevelop.generic.repostories.ProfileRepository;
import com.SamuelDevelop.generic.service.AuthenticatedUserService;
import com.SamuelDevelop.generic.service.ProfileService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("profiles")
public class ProfileController {
    private final ProfileRepository profileRepository;
    private final ProfileService profileService;
    private final AuthenticatedUserService authenticatedUserService;

    @GetMapping("nickname/{nickName}")
    public Profile getProfileByNickName(@PathVariable String nickName){
        return profileRepository.findByNickname(nickName);
    }

    @GetMapping("/my")
    public List<ProfileResponseDTO> getAuthenticatedUserProfiles(){
        User owner = authenticatedUserService.getCurrentUser();
        
        return profileRepository.findByUserId(owner.getId())
            .stream()
            .map(profile -> new ProfileResponseDTO(
                profile.getNickname(),
                profile.getFirstname(),
                profile.getLastname(),
                profile.getDescription(),
                profile.getProfileImage()
            )).toList();
    }

    @PostMapping(value = "/create", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> createProfile(@ModelAttribute @Valid ProfileDTO dto){
        Profile profile = profileService.toEntity(dto);

        this.profileRepository.save(profile);
        return ResponseEntity.ok().build();
    }

    // @PostMapping("/update")
    // @PostMapping("/active")
    // @PostMapping("/disable")
    // @PostMapping("/banned")
}
