import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nutrition Blog — Talia AI',
  description: 'Expert nutrition tips, meal plans, diet comparisons, and healthy eating guides. Learn how to reach your health goals with evidence-based advice.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categoryColors: Record<string, string> = {
    'Nutrition Tips': 'bg-green-100 text-green-700',
    'App Reviews': 'bg-blue-100 text-blue-700',
    'Meal Plans': 'bg-orange-100 text-orange-700',
    'Recipes': 'bg-pink-100 text-pink-700',
    'Nutrition Science': 'bg-purple-100 text-purple-700',
  };
  return (
    <div className="py-16 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nutrition Blog</h1>
          <p className="text-gray-500 text-lg">Evidence-based nutrition tips, meal plans, and healthy eating guides.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">{post.readTime}</span>
              </div>
              <h2 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-green-700 transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{post.description}</p>
              <div className="mt-4 text-xs text-gray-400">
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
