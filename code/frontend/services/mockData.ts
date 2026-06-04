import PostProps from "@/types/props/PostProps";

export async function getMockData(fileName : string){
    try {
        console.log(`/mock_data/${fileName}.json`);
        const response = await fetch(`/mock_data/${fileName}.json`);
        const data = await response.json();

        return data;
    }
    catch (err){
        console.error("Erro ao buscar dados mockados:", err);
    }
}

type MockPostsResponse = {
  posts: PostProps[];
};

export async function getMockPosts() : Promise<PostProps[]> {
    const postsData = await getMockData("posts_mock") as MockPostsResponse;

    return postsData.posts;
}