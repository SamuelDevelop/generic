package com.SamuelDevelop.generic.enumeration;

import lombok.Getter;

@Getter
public enum Gender {
    MALE("male"),
    FEMALE("female"),
    NONBINARY("nonBinary"),
    NOTINFORMED("not informed"),
    UNDEFINED("undefined");
    
    private String visibility;

    Gender(String visibility){
        this.visibility = visibility;
    }
}
