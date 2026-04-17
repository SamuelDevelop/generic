package com.SamuelDevelop.generic.domain;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Lob;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Profile {
    
    @EmbeddedId
    private ProfileId id;

    @Column(unique = true)
    private String nickName;

    private String firstName;
    private String lastName;
    private String description;

    @Lob
    private byte[] personalImage;

    private Character gender;

    private String personalLinks[];
    private String personalHobbies[];
    private String userPreferences[];
}
