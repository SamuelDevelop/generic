package com.SamuelDevelop.generic.domain;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class ProfileId implements Serializable{
    
    @Column(name = "author_id", nullable = false)
    private long userId;

    private long profileId;
}
