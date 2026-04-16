package com.SamuelDevelop.generic.domain;

import java.io.Serializable;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class ProfileId implements Serializable{
    private long userId;
    private long profileId;
}
