package com.SamuelDevelop.generic.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/texto-aleatorio")
public class RandomTextController {
    
    @GetMapping
    public String randomText(){

        return "Meu textinho aleatorio e generico";
    }
}
