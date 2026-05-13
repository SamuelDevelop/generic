package com.SamuelDevelop.generic.service;

import java.io.IOException;
import java.time.LocalDate;

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
        
        User user = (User) this.repository.findByLogin(dto.userLogin());

        if(user == null){
            throw new UserNotFoundException("Em ProfileService em toEntity");
        }
        
        entity.setUser(user);
        entity.setNickName(dto.nickName());
        entity.setFirstName(dto.firstName());
        entity.setLastName(dto.lastName());
        entity.setDescription(dto.description());
        entity.setBirthday(LocalDate.parse(dto.birthday()));
        entity.setGender(dto.gender());
        if (dto.personalImage() != null && !dto.personalImage().isEmpty()) {
            try {
                entity.setProfileImage(dto.personalImage().getBytes());
            } catch (IOException e) {
                throw new RuntimeException("Erro ao processar imagem");
            }
        }

        return entity;
    }
}
