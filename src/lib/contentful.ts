import { createClient } from 'contentful';
import { BlogPost } from '@/data/blogPosts';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: ['-fields.publishDate'],
    });

    return response.items.map((item: any) => ({
      title: item.fields.title as string || '',
      slug: item.fields.slug as string || '',
      excerpt: item.fields.excerpt as string || '',
      content: item.fields.content as string || '',
      featuredImage: {
        url: (item.fields.featuredImage as any)?.fields?.file?.url as string || '',
        title: (item.fields.featuredImage as any)?.fields?.title as string || '',
      },
      category: item.fields.category as string || '',
      readingTime: Number(item.fields.readingTime) || 0,
      publishDate: item.fields.publishDate as string || '',
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
      title: item.fields.title as string || '',
      slug: item.fields.slug as string || '',
      excerpt: item.fields.excerpt as string || '',
      content: item.fields.content as string || '',
      featuredImage: {
        url: (item.fields.featuredImage as any)?.fields?.file?.url as string || '',
        title: (item.fields.featuredImage as any)?.fields?.title as string || '',
      },
      category: item.fields.category as string || '',
      readingTime: Number(item.fields.readingTime) || 0,
      publishDate: item.fields.publishDate as string || '',
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
} 