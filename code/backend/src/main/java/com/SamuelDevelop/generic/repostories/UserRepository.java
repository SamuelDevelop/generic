package com.SamuelDevelop.generic.repostories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import com.SamuelDevelop.generic.entity.User;

public interface UserRepository extends JpaRepository<User, String>{
    UserDetails findByLogin(String login);  
    boolean existsByLogin(String login);  
}
