package com.SamuelDevelop.generic.repostories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SamuelDevelop.generic.entity.Profile;
import com.SamuelDevelop.generic.entity.User;
import com.SamuelDevelop.generic.enumeration.ProfileStatus;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
    List<Profile> findByUser(User user);
    List<Profile> findByUserId(Long userId);
    List<Profile> findByUserIdAndStatus(Long userId, ProfileStatus status);
    Profile findByNickname(String nickname);
    long countByUserId(Long userId);
}
