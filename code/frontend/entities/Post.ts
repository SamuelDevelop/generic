import { Profile } from "./Profile";
import { Publication } from "./Publication";

export class Post {

    private profile : Profile;
    private publication : Publication;

    constructor(profile : Profile, publication : Publication){
        this.profile = profile;
        this.publication = publication;
    }

    getProfile(){
        return this.profile;
    }

    getPublication(){
        return this.publication;
    }
}