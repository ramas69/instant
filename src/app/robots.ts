import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/merci',
    },
    sitemap: 'https://instant-ia.com/sitemap.xml',
  }
}
