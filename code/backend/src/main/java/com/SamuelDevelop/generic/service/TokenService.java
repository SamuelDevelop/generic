package com.SamuelDevelop.generic.service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.SamuelDevelop.generic.entity.User;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;

@Service
public class TokenService {

    @Value("${api.security.token.secret}")
    private String secretSalt;

    public String generateToken(User user){

        try{
            Algorithm algorithm = Algorithm.HMAC256(secretSalt);
            String token = JWT.create()
                .withIssuer("generic-api")
                .withSubject(user.getLogin())
                .withExpiresAt(getExpirationTime())
                .sign(algorithm);

            return token;
        } catch (JWTCreationException e){
            throw new RuntimeException("Erro de criar chave JWT", e);
        }
    }

    public String validateToken(String token){
        try{
            Algorithm algorithm = Algorithm.HMAC256(secretSalt);
            return JWT.require(algorithm)
                .withIssuer("generic-api")
                .build()
                .verify(token)
                .getSubject();

        } catch (JWTVerificationException e){
            return "";
        }
    }

    private Instant getExpirationTime(){
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }
}
