export interface Post {
    title: string;
    content: string;
    author: string;
    img_url: string;
    category: string;
    published_at: Date;
    last_edit_at: Date;
}

// TODO: Erase if not used
interface Category {
    technology: string;
    science: string;
    politics: string;
    finance: string;
    varied: string;
}