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
import com.SamuelDevelop.generic.entity.Profile;
import com.SamuelDevelop.generic.entity.User;
import com.SamuelDevelop.generic.exception.ProfileNotFoundException;
import com.SamuelDevelop.generic.repostories.ProfileRepository;
import com.SamuelDevelop.generic.repostories.UserRepository;
import com.SamuelDevelop.generic.service.ProfileService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("profile")
public class ProfileController {
    
    @Autowired
    private ProfileRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProfileService service;

    @GetMapping("{nickName}")
    public Profile getProfileByNickName(@PathVariable String nickName){
        return repository.findByNickName(nickName);
    }

    @GetMapping("/owner/{login}")
    public List<Profile> getProfileByOwnerLogin(@PathVariable String login){
        User owner = (User) userRepository.findByLogin(login);
        
        return repository.findByUserId(owner.getId());
    }
    
    @GetMapping("{id}")
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
