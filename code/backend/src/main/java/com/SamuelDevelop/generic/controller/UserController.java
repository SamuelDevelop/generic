package com.SamuelDevelop.generic.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SamuelDevelop.generic.dto.response.UserResponseDTO;
import com.SamuelDevelop.generic.entity.User;
import com.SamuelDevelop.generic.service.AuthenticatedUserService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("users")
public class UserController {

    private final AuthenticatedUserService authenticatedUserService;

    @GetMapping("/me")
    public ResponseEntity<?> me() {
        User user = authenticatedUserService.getCurrentUser();

        if (user == null) {
            return ResponseEntity.status(401)
            .body(Map.of(
                "error", "Unauthorized",
                "message", "User Authenticated Not Found"
            ));
        }

        return ResponseEntity.ok(
            new UserResponseDTO(
                user.getEmail(),
                user.getName(),
                user.getRole(),
                user.getGender(),
                user.getBirthday()
            )
        );
    }

    /*
        TO DO:

        @GetMapping("/list")
        @GetMapping("/me/delete")    
    */
}
