package com.SamuelDevelop.generic.repostories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SamuelDevelop.generic.domain.Profile;
import com.SamuelDevelop.generic.domain.ProfileId;

public interface ProfileRepository extends JpaRepository<Profile, ProfileId> {
    Profile findByIdUserId(long userId);
    Profile findByIdProfileId(long profileId);
}
