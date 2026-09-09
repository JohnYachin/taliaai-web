import { getAllPosts } from '@/lib/posts';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://taliaai.blog';
  const posts = getAllPosts();
  const staticPages = ['', '/how-it-works', '/about', '/pricing', '/contact', '/blog', '/privacy-policy', '/terms', '/refund-policy'];

  return [
    ...staticPages.map(path => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1.0 : 0.8,
    })),
    ...posts.map(post => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
