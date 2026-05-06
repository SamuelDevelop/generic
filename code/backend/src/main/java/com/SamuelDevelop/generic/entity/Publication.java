package com.SamuelDevelop.generic.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.SamuelDevelop.generic.enumeration.PublicationVisibility;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "publications")
@Inheritance(strategy = InheritanceType.JOINED)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Publication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true)
    private long id;

    @Column(nullable = false)
    private LocalDateTime publicationDate;

    @ManyToOne
    @JoinColumn(name = "author_id", nullable = false)
    private User author;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PublicationVisibility visibility;

    private String description;

    @ManyToMany
    @JoinTable(
        name = "post_collaborators",
        joinColumns = @JoinColumn(name = "post_id"),
        inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> collaborators = new ArrayList<>();

    Publication(User author, LocalDateTime publicationDate, PublicationVisibility visibility){
        this.author = author;
        this.publicationDate = publicationDate;
        this.visibility = visibility;
        this.description = null;
    }

    
    Publication(User author, LocalDateTime publicationDate, PublicationVisibility visibility, String description){
        this.author = author;
        this.publicationDate = publicationDate;
        this.visibility = visibility;
        this.description = description;
    }
}
