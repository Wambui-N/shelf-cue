export interface Book {
  title: string;
  author: string;
  genre: string;
  tags: string[];
  mood: string[];
  journey: string[];
  path: string[];
  seasonal: string[];
  influencer_list: string[];
  amazon_affiliate_link: string;
  image_url: string;
  rating: number;
  publication_year: number;
}

export interface BooksData {
  books: Book[];
} 