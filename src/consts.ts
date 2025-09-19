import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'k1nxx',
  description:
    'A developer blog for myself, where i go over different projects and findings',
  href: 'https://astro-erudite.vercel',
  author: 'k1nxx',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/k1nxx',
    label: 'GitHub',
  }
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
