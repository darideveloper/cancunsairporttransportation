export interface Post {
    id: number;
    title: string;
    slug: string;
    lang: 'es' | 'en';
    banner_image_url: string;
    description: string;
    author: string;
    created_at: string;
    updated_at: string;
}

export interface PostDetail extends Post {
    related_post: number | null;
    content: string;
    keywords: string;
}
