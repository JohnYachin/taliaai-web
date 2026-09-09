import { getPost, getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Talia AI Blog`,
    description: post.description,
    keywords: post.keywords,
    openGraph: { title: post.title, description: post.description, type: 'article', publishedTime: post.date },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Person', name: 'Evgeni Yachin' },
    publisher: { '@type': 'Organization', name: 'Talia AI', url: 'https://taliaai.blog' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="py-12 min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/blog" className="text-sm text-green-600 hover:underline mb-6 inline-flex items-center gap-1">
            ← Back to Blog
          </Link>
          <div className="mt-4 mb-2">
            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">{post.category}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-10 pb-6 border-b border-gray-100">
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <div
            className="prose prose-gray max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h3:text-xl prose-a:text-green-600 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="mt-12 bg-green-50 rounded-2xl p-8 border border-green-100 text-center">
            <p className="text-green-700 font-semibold mb-2">Ready to put this into practice?</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Get your personalized meal plan with Talia AI</h3>
            <p className="text-gray-500 text-sm mb-6">12 recipes daily · Food photo tracking · AI nutrition guidance</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://apps.apple.com/app/talia-ai/id6745192320" target="_blank" rel="noreferrer"
                className="bg-black text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors">
                🍎 Download on App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.taliaai.app" target="_blank" rel="noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-green-700 transition-colors">
                ▶ Get on Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
