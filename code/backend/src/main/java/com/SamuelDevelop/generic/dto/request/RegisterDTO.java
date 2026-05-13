package com.SamuelDevelop.generic.dto.request;

import com.SamuelDevelop.generic.enumeration.UserRole;

public record RegisterDTO(String login, String password, UserRole role, String name){
}
