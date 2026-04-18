import Post from "@/entities/Post";
import { Profile } from "@/entities/Profile";
import { Publication } from "@/entities/Publication";

export async function getMockData(fileName : string){
    
    try {
        console.log(`Fecth em: @/mock_data/${fileName}.json`);
        const response = await fetch(`/mock_data/${fileName}.json`);
        const data = await response.json();

        return data;
    }
    catch (err){
        console.error("Erro ao buscar dados mockados:", err);
    }
}

export async function getMockPost(id: number) {
    const posts = await getMockData("posts_mock");
    const postsArray = posts.posts;

    if(postsArray[id]){
        const post = postsArray[id];

        if(posts.hasProfileImage){

        }

        const userProfile = new Profile(post.authorNickName, null, post.authorFirstname, post.authorLastName);
    }

    const profile = new Profile();
    const publication = new Publication();
    const post = new Post(profile, publication);

    return post;
}