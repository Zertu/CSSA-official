import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import Main from './Main'
import { getArticles } from 'api/article'

export default async function Page() {
  // const sortedPosts = sortPosts(allBlogs)
  // const posts = allCoreContent(sortedPosts)
  const posts = await getArticles()
  return <Main posts={posts || []} />
}
