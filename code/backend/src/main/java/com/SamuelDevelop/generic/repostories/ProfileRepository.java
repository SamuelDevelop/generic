package com.SamuelDevelop.generic.repostories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SamuelDevelop.generic.domain.Profile;
import com.SamuelDevelop.generic.domain.Users;

public interface ProfileRepository extends JpaRepository<Profile, Long> {

    Profile findByUser(Users user);
    Profile findByUserId(Long userId);
    Profile findByNickName(String nickName);
}
