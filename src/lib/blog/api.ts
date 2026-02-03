import type { Post, PostDetail } from "../../types/blog";

export async function getPosts(lang: string = 'es'): Promise<Post[]> {
    const headers = new Headers();
    headers.append('Accept-Language', lang);
    if (import.meta.env.API_TOKEN) {
        headers.append('Authorization', `Token ${import.meta.env.API_TOKEN}`);
    }

    const response = await fetch(`${import.meta.env.API_BASE}/api/posts/?page-size=1000`, {
        headers
    });

    if (!response.ok) {
        console.error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
        return [];
    }

    const result = await response.json();
    return result?.results as Post[];
}

export async function getPostBySlug(slug: string, lang: string): Promise<PostDetail | null> {
    const headers = new Headers();
    headers.append('Accept-Language', lang);
    if (import.meta.env.API_TOKEN) {
        headers.append('Authorization', `Token ${import.meta.env.API_TOKEN}`);
    }

    const response = await fetch(`${import.meta.env.API_BASE}/api/posts/${slug}/?details=true`, {
        headers
    });

    if (!response.ok) {
        console.error(`Failed to fetch post by slug ${slug}: ${response.status} ${response.statusText}`);
        return null;
    }

    return await response.json() as PostDetail;
}
