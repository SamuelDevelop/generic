package com.SamuelDevelop.generic.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.SamuelDevelop.generic.entity.User;
import com.SamuelDevelop.generic.enumeration.UserRole;
import com.SamuelDevelop.generic.repostories.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class DataLoader implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${app.admin.login}")
    private String adminLogin;

    @Value("${app.admin.password}")
    private String adminPassword;

    @Value("${app.user.login}")
    private String userLogin;

    @Value("${app.user.password}")
    private String userPassword;

    @Override
    public void run(String... args) throws Exception {
        if (!userRepository.existsByLogin(adminLogin)) {
            User admin = new User(
                adminLogin,
                passwordEncoder.encode(adminPassword),
                "Administrador",
                UserRole.ADMIN
            );

            userRepository.save(admin);
            System.out.println("Admin was created successfully!");
        }
        else{
            System.out.println("Administrador already exists");
        }

        if (!userRepository.existsByLogin(userLogin)) {
            User user = new User(
                userLogin,
                passwordEncoder.encode(userPassword),
                "Usuário Genérico",
                UserRole.USER
            );

            
            userRepository.save(user);
            System.out.println("Generic User was created successfully!");
        }
        else{
            System.out.println("Generic User already exists");
        }
    }
}