export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'tea' | 'coffee' | 'snack';
  image: string;
  isSpecial?: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}