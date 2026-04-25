package com.SamuelDevelop.generic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SamuelDevelop.generic.domain.Profile;
import com.SamuelDevelop.generic.domain.ProfileId;
import com.SamuelDevelop.generic.dto.ProfileDTO;
import com.SamuelDevelop.generic.repostories.ProfileRepository;
import com.SamuelDevelop.generic.service.ProfileService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("profile")
public class ProfileController {
    
    @Autowired
    private ProfileRepository repository;

    @Autowired
    private ProfileService service;

    @GetMapping("{id}")
    public Profile getProfileById(@PathVariable ProfileId id){
        return repository.findByAuthorId(id);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createProfile(@RequestBody @Valid ProfileDTO dto){
        Profile profile = service.toEntity(dto);

        if(this.repository.findByAuthorId(profile.getId()) != null){
            return ResponseEntity.badRequest().build();
        }

        this.repository.save(profile);

        return ResponseEntity.ok().build();
    }

    // @PostMapping("/update")
    // @PostMapping("/active")
    // @PostMapping("/disable")
    // @PostMapping("/banned")
}
