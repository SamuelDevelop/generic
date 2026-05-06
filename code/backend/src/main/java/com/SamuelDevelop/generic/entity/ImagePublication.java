package com.SamuelDevelop.generic.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "image_publications")
@Getter
@Setter
public class ImagePublication extends Publication{
    @Column(nullable = false, columnDefinition = "bytea")
    private byte[] image;

    @Column(nullable = false)
    private String photoDescription;

    private LocalDateTime lastEdit;
}
