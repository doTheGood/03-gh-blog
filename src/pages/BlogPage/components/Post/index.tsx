import { PostContainer } from './styles'

export function Post() {
  return (
    <PostContainer to={'/post/1'}>
      <div>
        <strong>JavaScript data types and data structures</strong>
        <span>Há 1 dia</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem id
        assumenda aliquid mollitia, at dolores quae fugiat odit et ea! Labore,
        repellendus! Libero minima sit maiores ex velit a commodi.
      </p>
    </PostContainer>
  )
}
