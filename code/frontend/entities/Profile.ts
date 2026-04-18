import { StaticImageData } from "next/image";

export class Profile {

    private nickName : string;
    private personalImage : StaticImageData | null | undefined;
    private firstName : string;
    private lastName: string | null | undefined;

    constructor(nickName : string, personalImage : StaticImageData | null | undefined, firstName : string, lastName: string | null | undefined){
        this.nickName = nickName;
        this.personalImage = personalImage;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getPersonalImage(){
        return this.personalImage;
    }

    getFirstName(){
        return this.firstName;
    }
    
    getLastName(){
        return this.lastName;
    }
}