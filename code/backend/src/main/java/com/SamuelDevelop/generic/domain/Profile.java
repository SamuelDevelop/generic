package com.SamuelDevelop.generic.domain;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Lob;
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

    private String name;
    private String lastname;
    private String description;

    @Lob
    private byte[] personalImage;

    private Character gender;

    private String personalLinks[];
    private String personalHobbies[];
    private String userPreferences[];
}
