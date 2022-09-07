import { IPost } from '../..'
import { relativeDateFormatter } from '../../../../utils/formatter'
import { PostContainer } from './styles'

interface IPostProps {
  post: IPost
}

export function Post({ post }: IPostProps) {
  const formattedDate = relativeDateFormatter(post.created_at)

  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formattedDate}</span>
      </div>
      <p>{post.body}</p>
    </PostContainer>
  )
}
