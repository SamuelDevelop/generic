package com.SamuelDevelop.generic.repostories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SamuelDevelop.generic.entity.Profile;
import com.SamuelDevelop.generic.entity.User;

public interface ProfileRepository extends JpaRepository<Profile, Long> {

    Profile findByUser(User user);
    Profile findByUserId(Long userId);
    Profile findByNickName(String nickName);
}
