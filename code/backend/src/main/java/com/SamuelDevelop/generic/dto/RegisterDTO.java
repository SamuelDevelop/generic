package com.SamuelDevelop.generic.dto;

import com.SamuelDevelop.generic.enums.UserRole;

public record RegisterDTO(String login, String password, UserRole role, String name){
}
