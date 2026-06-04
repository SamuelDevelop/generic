package com.SamuelDevelop.generic.config;

import java.time.LocalDate;
import java.time.Month;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.SamuelDevelop.generic.entity.User;
import com.SamuelDevelop.generic.enumeration.Gender;
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
        if (!userRepository.existsByEmail(adminLogin)) {
            User admin = new User(
                adminLogin,
                passwordEncoder.encode(adminPassword),
                "Administrador",
                UserRole.ADMIN,
                Gender.MALE,
                LocalDate.of(1976, Month.AUGUST, 8),
                "(00) 10000-0000"
            );

            userRepository.save(admin);
            System.out.println("Admin was created successfully!");
        }
        else{
            System.out.println("Administrador already exists");
        }

        if (!userRepository.existsByEmail(userLogin)) {
            User user = new User(
                userLogin,
                passwordEncoder.encode(userPassword),
                "Usuário Genérico",
                UserRole.USER,
                Gender.MALE,
                LocalDate.of(1988, Month.MARCH, 7),
                "(00) 10000-0000"
            );

            
            userRepository.save(user);
            System.out.println("Generic User was created successfully!");
        }
        else{
            System.out.println("Generic User already exists");
        }
    }
}