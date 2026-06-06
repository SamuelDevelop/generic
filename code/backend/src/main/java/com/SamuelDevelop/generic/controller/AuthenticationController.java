package com.SamuelDevelop.generic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SamuelDevelop.generic.dto.request.AuthenticationDTO;
import com.SamuelDevelop.generic.dto.request.RegisterDTO;
import com.SamuelDevelop.generic.entity.User;
import com.SamuelDevelop.generic.repostories.UserRepository;
import com.SamuelDevelop.generic.service.TokenService;

import jakarta.servlet.http.HttpServletResponse;
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

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid RegisterDTO data){
        if(this.repository.findByEmail(data.email()) != null) {
            return ResponseEntity.badRequest().build();
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        User newUser = new User(data.email(), encryptedPassword, data.name(), data.role(), data.gender(), data.birthday(), data.phoneNumber());

        this.repository.save(newUser);

        return ResponseEntity.ok().build();
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid AuthenticationDTO data, HttpServletResponse response){
        var usernamePasword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = authenticationManager.authenticate(usernamePasword);

        User user = (User) auth.getPrincipal();
        String accessToken = tokenService.generateToken(user);
        String refreshToken = tokenService.generateRefreshToken(user);

        ResponseCookie accessCookie = ResponseCookie.from("token", accessToken)
        .httpOnly(true)
        .secure(false)
        .path("/")
        .maxAge(60 * 15)
        .build();

        ResponseCookie refreshCookie = ResponseCookie.from("refreshToken", refreshToken)
            .httpOnly(true)
            .secure(false)
            .path("/")
            .maxAge(60 * 60 * 24 * 7)
            .build();

        response.addHeader("Set-Cookie", accessCookie.toString());
        response.addHeader("Set-Cookie", refreshCookie.toString());

        return ResponseEntity.ok().build();
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(
        @CookieValue(name = "refreshToken", required = false) String refreshToken, 
        HttpServletResponse response
    ){
        if(refreshToken == null){
            return ResponseEntity.status(401).build();
        }

        try {
            String login = tokenService.validateToken(refreshToken);
            User user = (User) repository.findByEmail(login);

            if (user == null) {
                return ResponseEntity.status(401).build();
            }

            String newAccessToken = tokenService.generateToken(user);

            ResponseCookie accessCookie = ResponseCookie.from("token", newAccessToken)
            .httpOnly(true)
            .secure(false)
            .path("/")
            .maxAge(60 * 15)
            .build();

            response.addHeader("Set-Cookie", accessCookie.toString());
            return ResponseEntity.ok().build();

        } catch (Exception e) {
            return ResponseEntity.status(401).build();
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletResponse response){

        ResponseCookie deleteAccess = ResponseCookie.from("token", "")
            .httpOnly(true)
            .path("/")
            .maxAge(0)
            .build();

        ResponseCookie deleteRefresh = ResponseCookie.from("refreshToken", "")
            .httpOnly(true)
            .path("/")
            .maxAge(0)
            .build();

        response.addHeader("Set-Cookie", deleteAccess.toString());
        response.addHeader("Set-Cookie", deleteRefresh.toString());

        return ResponseEntity.ok().build();
    }
}
