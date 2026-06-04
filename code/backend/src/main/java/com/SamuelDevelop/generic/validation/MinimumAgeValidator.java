package com.SamuelDevelop.generic.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import java.time.LocalDate;
import java.time.Period;

import com.SamuelDevelop.generic.exception.InsuficientAgeException;

public class MinimumAgeValidator implements ConstraintValidator<MinimumAge, LocalDate>{
    private int minimumAge;

    @Override
    public void initialize(MinimumAge constraintAnnotation) {
        this.minimumAge = constraintAnnotation.valor();
    }

    @Override
    public boolean isValid(LocalDate birthday, ConstraintValidatorContext context) {
        if (birthday == null) {
            return true;
        }

        LocalDate today = LocalDate.now();
        int age = Period.between(birthday, today).getYears();

        if(age < minimumAge){
            throw new InsuficientAgeException();
        }

        return age >= minimumAge;
    }
}
