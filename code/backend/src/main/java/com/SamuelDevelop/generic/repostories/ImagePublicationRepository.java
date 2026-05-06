package com.SamuelDevelop.generic.repostories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SamuelDevelop.generic.entity.ImagePublication;

public interface ImagePublicationRepository extends JpaRepository<ImagePublication, Long> {
    
    List<ImagePublication> findByAuthorId(Long id);
}
