type Post = {
  id: number
  title: string
  tags: string[]
  draft: boolean
  summary: string
  images: string[]
  authors: string[]
  layout: string
  bibliography: string
  content: string
  article_index: number
  created_at: string
  updated_at: string
}
const PostRender = (props: Post) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
    </div>
  )
}
export default PostRender
