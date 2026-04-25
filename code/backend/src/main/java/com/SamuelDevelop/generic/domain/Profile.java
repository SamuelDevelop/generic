package com.SamuelDevelop.generic.domain;

import java.time.LocalDate;

import com.SamuelDevelop.generic.enums.Gender;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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

    @Column(columnDefinition = "bytea")
    private byte[] personalImage;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Gender gender;

    @Column(nullable = false)
    private LocalDate birthday;

    private String personalLinks[];
    private String personalHobbies[];
    private String userPreferences[];
}
