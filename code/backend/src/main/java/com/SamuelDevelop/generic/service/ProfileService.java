package com.SamuelDevelop.generic.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SamuelDevelop.generic.dto.request.ProfileDTO;
import com.SamuelDevelop.generic.entity.Profile;
import com.SamuelDevelop.generic.entity.User;
import com.SamuelDevelop.generic.exception.UserNotFoundException;
import com.SamuelDevelop.generic.repostories.UserRepository;

@Service
public class ProfileService {

    @Autowired
    private UserRepository repository;

    public Profile toEntity(ProfileDTO dto){
        Profile entity = new Profile();
        
        User user = (User) this.repository.findByEmail(dto.userLogin());

        if(user == null){
            throw new UserNotFoundException("in ProfileService in toEntity");
        }
        
        entity.setUser(user);
        entity.setNickname(dto.nickName());
        entity.setFirstname(dto.firstName());
        entity.setLastname(dto.lastName());
        entity.setDescription(dto.description());
        
        if (dto.personalImage() != null && !dto.personalImage().isEmpty()) {
            try {
                entity.setProfileImage(dto.personalImage().getBytes());
            } catch (IOException e) {
                throw new RuntimeException("Image processing failed");
            }
        }

        return entity;
    }
}
