package com.SamuelDevelop.generic.service;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.SamuelDevelop.generic.entity.User;

@Service
public class AuthenticatedUserService {
    public User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null) {
            return null;
        }

        return (User) authentication.getPrincipal();
    }
}
