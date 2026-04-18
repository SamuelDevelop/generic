package com.SamuelDevelop.generic.domain;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class ImagePublication extends Publication{

    @Column(nullable = false)
    private byte[] image;

    @Column(nullable = false)
    private String photoDescription;

    private LocalDateTime lastEdit;
}
