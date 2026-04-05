package com.SamuelDevelop.generic.repostories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import com.SamuelDevelop.generic.domain.Users;

public interface UserRepository extends JpaRepository<Users, String>{
    UserDetails findByLogin(String login);    
}
