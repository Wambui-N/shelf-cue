import { Metadata } from 'next';
import Image from 'next/image';
import { getBlogPostBySlug } from '@/lib/contentful';
import { NewsletterForm } from './NewsletterForm';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const slug = await params.slug;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  // Ensure image URL has proper protocol
  const imageUrl = post.featuredImage.url.startsWith('//') 
    ? `https:${post.featuredImage.url}`
    : post.featuredImage.url;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.featuredImage.title
        }
      ]
    }
  };
}

function renderRichText(content: any) {
  if (!content || !content.content) return null;

  return content.content.map((node: any, index: number) => {
    // Handle headings
    if (node.nodeType === 'heading-1') {
      return (
        <h1 key={index} className="text-4xl font-bold text-navy mt-12 mb-6">
          {node.content.map((textNode: any) => textNode.value).join('')}
        </h1>
      );
    }
    if (node.nodeType === 'heading-2') {
      return (
        <h2 key={index} className="text-3xl font-bold text-navy mt-10 mb-4">
          {node.content.map((textNode: any) => textNode.value).join('')}
        </h2>
      );
    }
    if (node.nodeType === 'heading-3') {
      return (
        <h3 key={index} className="text-2xl font-semibold text-navy mt-8 mb-3">
          {node.content.map((textNode: any) => textNode.value).join('')}
        </h3>
      );
    }

    // Handle paragraphs
    if (node.nodeType === 'paragraph') {
      return (
        <p key={index} className="mb-4">
          {node.content.map((textNode: any, textIndex: number) => {
            if (textNode.nodeType === 'text') {
              let text = textNode.value;
              if (textNode.marks) {
                textNode.marks.forEach((mark: any) => {
                  if (mark.type === 'bold') {
                    text = <strong key={textIndex}>{text}</strong>;
                  }
                  if (mark.type === 'italic') {
                    text = <em key={textIndex}>{text}</em>;
                  }
                });
              }
              return text;
            }
            return null;
          })}
        </p>
      );
    }

    // Handle lists
    if (node.nodeType === 'unordered-list') {
      return (
        <ul key={index} className="list-disc ml-6 mb-4">
          {node.content.map((listItem: any, itemIndex: number) => (
            <li key={itemIndex} className="mb-2">
              {listItem.content.map((paragraph: any) => 
                paragraph.content.map((textNode: any) => textNode.value).join('')
              )}
            </li>
          ))}
        </ul>
      );
    }

    if (node.nodeType === 'ordered-list') {
      return (
        <ol key={index} className="list-decimal ml-6 mb-4">
          {node.content.map((listItem: any, itemIndex: number) => (
            <li key={itemIndex} className="mb-2">
              {listItem.content.map((paragraph: any) => 
                paragraph.content.map((textNode: any) => textNode.value).join('')
              )}
            </li>
          ))}
        </ol>
      );
    }

    return null;
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const slug = await params.slug;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-offwhite py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900">Blog Post Not Found</h1>
          <p className="mt-4 text-gray-600">The requested blog post could not be found.</p>
        </div>
      </div>
    );
  }

  // Ensure image URL has proper protocol
  const imageUrl = post.featuredImage.url.startsWith('//') 
    ? `https:${post.featuredImage.url}`
    : post.featuredImage.url;

  return (
    <div className="min-h-screen bg-offwhite">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="overflow-hidden">
          <div className="p-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                {post.category}
              </span>
              <span>{post.readingTime} min read</span>
              <span>{new Date(post.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>

            <h1 className="text-4xl font-bold text-navy mb-8">
              {post.title}
            </h1>

            <div className="relative h-[400px] w-full mb-8">
              <Image
                src={imageUrl}
                alt={post.featuredImage.title}
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none">
              {renderRichText(post.content)}
            </div>
          </div>
        </div>

        <NewsletterForm />
      </article>
    </div>
  );
} 