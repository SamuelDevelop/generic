package com.SamuelDevelop.generic.exception;

public class MaxProfilesReachedException extends RuntimeException{
    public MaxProfilesReachedException(){
        super("The user has reached the limit of profiles that can be created per user.");
    }
}
