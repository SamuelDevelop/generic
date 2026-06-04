package com.SamuelDevelop.generic.repostories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SamuelDevelop.generic.entity.Profile;
import com.SamuelDevelop.generic.entity.User;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
    List<Profile> findByUser(User user);
    List<Profile> findByUserId(Long userId);
    Profile findByNickname(String nickname);
}
