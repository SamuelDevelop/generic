package com.SamuelDevelop.generic.domain;

import java.io.Serializable;

import jakarta.persistence.Embeddable;

@Embeddable
public class ProfileId implements Serializable{
    private long userId;
    private long profileId;
}
