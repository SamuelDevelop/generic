package com.SamuelDevelop.generic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.SamuelDevelop.generic.exception.ProfileNotFoundException;
import com.SamuelDevelop.generic.repostories.ProfileRepository;
import com.SamuelDevelop.generic.repostories.UserRepository;
import com.SamuelDevelop.generic.service.ProfileService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("profiles")
public class ProfileController {
    
    @Autowired
    private ProfileRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProfileService service;

    @GetMapping("nickname/{nickName}")
    public Profile getProfileByNickName(@PathVariable String nickName){
        return repository.findByNickname(nickName);
    }

    @GetMapping("/owner/{email}")
    public List<ProfileResponseDTO> getProfileByOwnerLogin(@PathVariable String email){
        User owner = (User) userRepository.findByEmail(email);
        
        return repository.findByUserId(owner.getId())
            .stream()
            .map(profile -> new ProfileResponseDTO(
                profile.getNickname(),
                profile.getFirstname(),
                profile.getLastname(),
                profile.getDescription(),
                profile.getProfileImage()
            )).toList();
    }
    
    @GetMapping("id/{id}")
    public Profile getProfileById(@PathVariable long id){
        return repository.findById(id)
            .orElseThrow(() -> new ProfileNotFoundException());
    }

    @PostMapping(value = "/create", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> createProfile(@ModelAttribute @Valid ProfileDTO dto){
        Profile profile = service.toEntity(dto);

        this.repository.save(profile);
        return ResponseEntity.ok().build();
    }

    // @PostMapping("/update")
    // @PostMapping("/active")
    // @PostMapping("/disable")
    // @PostMapping("/banned")
}
