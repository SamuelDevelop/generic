const API_URL = process.env.BACKEND_PUBLIC_API_URL;

export async function apiFetch(path: string, options?: RequestInit){
    //para remover
    console.log(`Resultado: ${API_URL}${path}`)

    return fetch(
        `${API_URL}${path}`,
        {
            ...options,
            credentials: 'include'
        }
    );
}