package com.SamuelDevelop.generic.enumeration;

import lombok.Getter;

@Getter
public enum Gender {
    MALE("male"),
    FEMALE("female"),
    NONBINARY("nonBinary"),
    NOTINFORMED("not informed"),
    UNDEFINED("undefined");
    
    private String gender;

    Gender(String gender){
        this.gender = gender;
    }
}
