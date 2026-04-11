package com.SamuelDevelop.generic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SamuelDevelop.generic.domain.Users;
import com.SamuelDevelop.generic.dto.AuthenticationDTO;
import com.SamuelDevelop.generic.dto.LoginResponseDTO;
import com.SamuelDevelop.generic.dto.RegisterDTO;
import com.SamuelDevelop.generic.repostories.UserRepository;
import com.SamuelDevelop.generic.service.TokenService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserRepository repository;
    
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid AuthenticationDTO data){
        var usernamePasword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = authenticationManager.authenticate(usernamePasword);

        var token = tokenService.generateToken((Users) auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid RegisterDTO data){
        if(this.repository.findByLogin(data.login()) != null) {
            return ResponseEntity.badRequest().build();
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        Users newUser = new Users(data.login(), encryptedPassword, data.name(), data.role());

        this.repository.save(newUser);

        return ResponseEntity.ok().build();
    }
}
