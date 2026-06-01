package com.SamuelDevelop.generic.validation;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = MinimumAgeValidator.class)
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
public @interface MinimumAge {
    String message() default "insufficient age";
    int valor() default 13;
    
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}

