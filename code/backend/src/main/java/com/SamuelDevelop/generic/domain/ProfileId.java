package com.SamuelDevelop.generic.domain;

import java.io.Serializable;

import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class ProfileId implements Serializable{
    
    @JoinColumn(name = "author_id", nullable = false)
    private Users userId;

    private long profileId;
}
