package com.SamuelDevelop.generic.entity;

import com.SamuelDevelop.generic.enumeration.ProfileStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name= "profiles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true)
    private long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(unique = true)
    private String nickname;

    @Column(nullable = false)
    private String firstname;
    private String lastname;

    @Column(name = "profile_description")
    private String description;

    @Column(columnDefinition = "bytea")
    private byte[] profileImage;

    @Enumerated(EnumType.STRING)
    @Column(name="status", nullable = false)
    private ProfileStatus status;
}
