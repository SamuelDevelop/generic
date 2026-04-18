package com.SamuelDevelop.generic.domain;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class TextPublication extends Publication{

    private String text;
    private LocalDateTime lastTextEdit;
}
