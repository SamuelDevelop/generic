const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch(path: string, options?: RequestInit, debugRoute: boolean = false){
    
    if(debugRoute){
        console.log(`Resultado: ${API_URL}${path}`);
    }
    
    return fetch(
        `${API_URL}${path}`,
        {
            ...options,
            credentials: 'include'
        }
    );
}