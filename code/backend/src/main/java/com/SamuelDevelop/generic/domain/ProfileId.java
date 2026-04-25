package com.SamuelDevelop.generic.domain;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class ProfileId implements Serializable{
    
    @JoinColumn(name = "author_id", nullable = false)
    private long userId;

    @Column(unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long profileId;
}
