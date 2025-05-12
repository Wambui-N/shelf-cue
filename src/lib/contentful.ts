import { createClient } from 'contentful';

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: {
    url: string;
    title: string;
  };
  author: {
    name: string;
    avatar: {
      url: string;
    };
  };
  category: string;
  readingTime: number;
  publishDate: string;
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: '-fields.publishDate',
    });

    return response.items.map((item: any) => ({
      title: item.fields.title,
      slug: item.fields.slug,
      excerpt: item.fields.excerpt,
      content: item.fields.content,
      featuredImage: {
        url: item.fields.featuredImage.fields.file.url,
        title: item.fields.featuredImage.fields.title,
      },
      author: {
        name: item.fields.author.fields.name,
        avatar: {
          url: item.fields.author.fields.avatar.fields.file.url,
        },
      },
      category: item.fields.category,
      readingTime: item.fields.readingTime,
      publishDate: item.fields.publishDate,
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
    });

    if (response.items.length === 0) {
      return null;
    }

    const item = response.items[0];
    return {
      title: item.fields.title,
      slug: item.fields.slug,
      excerpt: item.fields.excerpt,
      content: item.fields.content,
      featuredImage: {
        url: item.fields.featuredImage.fields.file.url,
        title: item.fields.featuredImage.fields.title,
      },
      author: {
        name: item.fields.author.fields.name,
        avatar: {
          url: item.fields.author.fields.avatar.fields.file.url,
        },
      },
      category: item.fields.category,
      readingTime: item.fields.readingTime,
      publishDate: item.fields.publishDate,
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
} 