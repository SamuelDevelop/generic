package com.SamuelDevelop.generic.service;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.SamuelDevelop.generic.entity.User;
import com.SamuelDevelop.generic.repostories.ProfileRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class AuthenticatedUserService {
    private final ProfileRepository profileRepository;
    private final static int userProfilesLimit = 3;

    public User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null) {
            return null;
        }

        return (User) authentication.getPrincipal();
    }

    public boolean isAbleToCreateProfile() {
        User user = getCurrentUser();

        if(user == null){
            return false;
        }

        return profileRepository.countByUserId(user.getId()) < userProfilesLimit;
    }
}
