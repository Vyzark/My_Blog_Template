export interface Post {
    title: string;
    content: string;
    author: string;
    img_url: string;
    category: Category;
    featured: boolean;
    published_at: Date;
    last_edit_at?: Date;
}

interface Category {
    category: string;
    icon: string;
}