import type { MetadataRoute } from 'next';
import { getAllPostsMeta } from '@/lib/blog';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/start-here', '/work-with-me', '/systems-starter-kit', '/thank-you', '/blog', '/about', '/contact'];
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date()
  }));

  const blogEntries = getAllPostsMeta().map((post) => ({
    url: `${siteConfig.domain}/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  return [...staticEntries, ...blogEntries];
}
