package com.SamuelDevelop.generic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SamuelDevelop.generic.entity.ImagePublication;
import com.SamuelDevelop.generic.repostories.ImagePublicationRepository;

@RestController
@RequestMapping("publication/image")
public class ImagePublicationController {

    @Autowired
    private ImagePublicationRepository repository;
    
    @GetMapping("{id}")
    public ImagePublication getPublicationById(@PathVariable Long id){
        return repository.findById(id).orElse(null);
    }
}
