package com.SamuelDevelop.generic.service;

import org.springframework.stereotype.Service;

import com.SamuelDevelop.generic.domain.Profile;
import com.SamuelDevelop.generic.domain.ProfileId;
import com.SamuelDevelop.generic.dto.ProfileDTO;

@Service
public class ProfileService {
    
    public Profile toEntity(ProfileDTO dto){
        Profile entity = new Profile();
        ProfileId id = new ProfileId();
        id.setProfileId(dto.profileId());
        id.setUserId(dto.userId());

        entity.setId(id);
        entity.setNickName(dto.nickName());
        entity.setFirstName(dto.firstName());
        entity.setLastName(dto.lastName());
        entity.setDescription(dto.description());
        entity.setBirthday(dto.birthday());
        entity.setGender(dto.gender());
        entity.setPersonalImage(dto.personalImage());

        return entity;
    }
}
