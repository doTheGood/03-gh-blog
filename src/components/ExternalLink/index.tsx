import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentProps } from 'react'
import { ExternalLinkContainer } from './styles'

type IExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string
}

export function ExternalLink({ text, ...rest }: IExternalLinkProps) {
  return (
    <ExternalLinkContainer {...rest}>
      {text}
      <FontAwesomeIcon icon={faUpRightFromSquare} />
    </ExternalLinkContainer>
  )
}
