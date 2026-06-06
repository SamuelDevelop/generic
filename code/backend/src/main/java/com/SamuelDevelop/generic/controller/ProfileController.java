package com.SamuelDevelop.generic.controller;

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
import com.SamuelDevelop.generic.repostories.ProfileRepository;
import com.SamuelDevelop.generic.service.ProfileService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("profiles")
public class ProfileController {
    private final ProfileRepository profileRepository;
    private final ProfileService profileService;
    
    @GetMapping("/nickname/{nickName}")
    public ProfileResponseDTO getProfileByNickName(@PathVariable String nickName){
        return profileService.toResponseDTO(profileRepository.findByNickname(nickName)) ;
    }

    @PostMapping(value = "/create", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> createProfile(@ModelAttribute @Valid ProfileDTO dto){
        profileService.createProfile(dto);
        return ResponseEntity.ok().build();
    }

    // @PostMapping("/update")
    // @PostMapping("/disable")
    // @PostMapping("/banned")
}
