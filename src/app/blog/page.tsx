import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/contentful';

export const metadata: Metadata = {
  title: 'Blog | Shelf Cue',
  description: 'Discover the latest insights, tips, and strategies for optimizing your business processes and automation workflows.',
};

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const categories = Array.from(new Set(posts.map(post => post.category)));

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black tracking-tight text-navy sm:text-5xl md:text-6xl">
            Expert Tips & Insights
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A peek into the strategies, tools, and automations we use to help businesses thrive.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug}
              className="group"
            >
              <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={`https:${post.featuredImage.url}`}
                    alt={post.featuredImage.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{post.readingTime} min read</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-end">
                    <span className="text-sm text-gray-500">
                      {new Date(post.publishDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get weekly tips and strategies delivered straight to your inbox to help you optimize your business processes.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </main>
    </div>
  );
} 