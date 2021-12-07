import Button from 'components/Button'
import { SearchResults } from 'templates/Home'
import * as S from './styles'

const Domain = ({ domain, status }: SearchResults) => (
  <S.DomainRow status={status}>
    <S.Domain status={status}>
      <strong>{domain}</strong>
      {status !== 'searching' && (
        <span>
          {status === 'taken' && <span>TAKEN</span>}
          {status === 'available' && <span>AVAILABLE</span>}
        </span>
      )}
    </S.Domain>
    <div>
      {status === 'taken' && <Button outline>Create Alert</Button>}
      {status === 'searching' && (
        <span>
          <S.Loading />
        </span>
      )}
      {status === 'available' && <Button>Register Now</Button>}
    </div>
  </S.DomainRow>
)

export default Domain
