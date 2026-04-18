package com.SamuelDevelop.generic.enums;

import lombok.Getter;

@Getter
public enum PublicationVisibility {
    
    PUBLIC("public"),
    PRIVATE("private"),
    CLOSED("closed"),
    ARCHIVED("archived"),
    REMOVED("removed");

    private String visibility;

    PublicationVisibility(String visibility){
        this.visibility = visibility;
    }
}
