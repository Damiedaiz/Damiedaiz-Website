import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import { BlogPostMeta } from './types';

const postsDirectory = path.join(process.cwd(), 'content/posts');

function calculateReadingTime(content: string) {
  const wordsPerMinute = 220;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function getAllPostsMeta(): BlogPostMeta[] {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((file) => file.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContents);
      return {
        title: data.title,
        description: data.description,
        date: data.date,
        tags: data.tags ?? [],
        author: data.author ?? 'Damiedaiz',
        slug
      } as BlogPostMeta;
    })
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContents);

  const { content: compiledContent } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: false
    }
  });

  return {
    meta: {
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags ?? [],
      author: data.author ?? 'Damiedaiz',
      slug
    } as BlogPostMeta,
    content: compiledContent,
    readingTime: calculateReadingTime(content)
  };
}

export function getRelatedPosts(slug: string, tags: string[]) {
  return getAllPostsMeta()
    .filter((post) => post.slug !== slug && post.tags.some((tag) => tags.includes(tag)))
    .slice(0, 3);
}
