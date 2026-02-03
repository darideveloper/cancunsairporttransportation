import rss from '@astrojs/rss'
import { getPosts } from '../lib/blog/api'
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts'

export async function GET(context) {
  const posts = await getPosts('es')

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: new Date(post.created_at),
      author: post.author,
      link: `/blog/${post.slug}/`,
    })),
  })
}
