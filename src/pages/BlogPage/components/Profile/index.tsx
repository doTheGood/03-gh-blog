import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/doTheGood.png" />
      <ProfileDetails>
        <header>
          <h1>Dino Sauro</h1>
          <ExternalLink text="GitHub" href="#" />
        </header>
        <p>
          This is a nice description people. I really like it. This is a nice
          description people. I really like it.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            doTheGood
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            doTheGood
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            13 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}
