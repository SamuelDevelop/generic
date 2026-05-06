package com.SamuelDevelop.generic.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "text_publications")
@Getter
@Setter
public class TextPublication extends Publication{

    @Column(nullable = false)
    private String text;
    
    private LocalDateTime lastTextEdit;
}
