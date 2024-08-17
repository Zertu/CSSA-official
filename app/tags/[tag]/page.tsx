import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayoutWithTags'
// import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import { getTags } from 'api/tag'

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const tag = await getTags(params.tag) 
  return genPageMetadata({
    title: tag.tag_name,
    description: `${siteMetadata.title} ${tag} tagged content`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  })
}

export const generateStaticParams = async () => {
  const tags = await getTags()
  return tags
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const tag = await getTags()
  // Capitalize first letter and convert space to dash
  const title = tag.find((i) => i.id === params.tag).tag_name
  const filteredPosts = allCoreContent(
    sortPosts([].filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
  )
  return <ListLayout tagData={tag} posts={filteredPosts} title={title} />
}
