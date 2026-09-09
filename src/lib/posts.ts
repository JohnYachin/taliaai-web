import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'src/content/blog');

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  return files
    .map(file => {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
      const { data } = matter(raw);
      return { slug, ...data } as PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return { slug, ...data, content: processed.toString() } as Post;
}
