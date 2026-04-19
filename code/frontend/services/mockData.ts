
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

export async function getMockPost() {
    const postsData = await getMockData("posts_mock");
    const postsArray = postsData.posts;
    
    return postsArray;
}