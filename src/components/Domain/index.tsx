import Router from 'next/router'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import { SearchResults } from 'templates/Home'
import { useAppContext } from 'utils/appContext'
import * as S from './styles'
import { event } from 'utils/ga'

export type DomainProps = SearchResults & {
  setOpenAlert?: (open: boolean) => void
}

const Domain = ({ domain, status, setOpenAlert }: DomainProps) => {
  const appContext = useAppContext()

  const handleRegisterDomain = () => {
    appContext.setState({ domain })

    event({
      event: 'domain_register',
      params: {
        domain
      }
    })

    Router.push('/dont-you-forget-about-me')
  }

  return (
    <S.DomainRow status={status}>
      <S.Domain status={status}>
        <strong>{domain}</strong>

        <MediaMatch greaterThan="small">
          {status !== 'searching' && (
            <span>
              {status === 'taken' && <span>TAKEN</span>}
              {status === 'available' && <span>AVAILABLE</span>}
            </span>
          )}
        </MediaMatch>
      </S.Domain>
      <div>
        {status === 'taken' && (
          <Button
            size="small"
            outline
            onClick={() => setOpenAlert && setOpenAlert(true)}
          >
            Create Alert
          </Button>
        )}
        {status === 'searching' && (
          <span>
            <S.Loading />
          </span>
        )}
        {status === 'available' && (
          <Button
            size="small"
            href={`http://www.anrdoezrs.net/links/100555377/type/dlg/https://www.namecheap.com/domains/registration/results.aspx?domain=${domain}`}
            target="_blank"
            onClick={handleRegisterDomain}
          >
            Register it!
          </Button>
        )}
      </div>
    </S.DomainRow>
  )
}

export default Domain
