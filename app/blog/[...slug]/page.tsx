import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'
import { getArticles } from 'api/article'
import { getAuthors } from 'api/author'

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const articleId = params.slug[0]
  const post = await getArticles(articleId)
  const authorList = post?.authors || ['default']
  // const allAuthors = await getAuthors()
  const authorDetails = await Promise.all(
    authorList.map(async (i) => {
      const detail = await getAuthors(i)
      return detail
    })
  )
  if (!post) {
    return
  }
  const publishedAt = new Date(post.created_at).toISOString()
  const modifiedAt = new Date(post.updated_at || post.created_at).toISOString()
  const { authors } = post
  const imageList = [siteMetadata.socialBanner]
  // if (post.images) {
  //   imageList = typeof post.images === 'string' ? [post.images] : post.images
  // }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => {
  const allBlogs = await getArticles()
  // const paths = allBlogs.map((p) => ({ slug: p.slug.split('/') }))

  return ''
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  // Filter out drafts in production
  const articleId = params.slug[0]
  const post = await getArticles(articleId)
  const allAuthors = await getAuthors()
  // const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)
  // if (postIndex === -1) {
  //   return notFound()
  // }
  const postIndex = 1
  const prev = await getArticles(articleId)
  const next = await getArticles(articleId)
  const authorList = post?.authors || ['default']
  console.log(authorList)
  const authorDetails = await Promise.all(
    authorList.map(async (i) => {
      const detail = await getAuthors(i)
      return detail
    })
  )
  console.log(authorDetails)
  const mainContent = coreContent(post)
  // const jsonLd = post.structuredData
  // jsonLd['author'] = authorDetails.map((author) => {
  //   return {
  //     '@type': 'Person',
  //     name: author.name,
  //   }
  // })

  const Layout = layouts[post.layout || defaultLayout]

  return (
    <>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
      <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
        <MDXLayoutRenderer code={''} components={components} toc={post.toc} />
      </Layout>
    </>
  )
}
