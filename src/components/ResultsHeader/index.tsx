import MediaMatch from 'components/MediaMatch'
import Toggle from 'components/Toggle'
import { useEffect, useState } from 'react'
import { SearchResults } from 'templates/Home'
import * as S from './styles'

export type ResultsHeaderProps = {
  results: SearchResults[]
  setHideTaken: (value: boolean | ((prevVar: boolean) => boolean)) => void
}

const ResultsHeader = ({ results = [], setHideTaken }: ResultsHeaderProps) => {
  const [found, setFound] = useState(0)
  const [taken, setTaken] = useState(0)

  useEffect(() => {
    const found = results.filter(({ status }) => status === 'available').length
    const taken = results.filter(({ status }) => status === 'taken').length
    setFound(found)
    setTaken(taken)
  }, [results])

  return (
    <>
      <S.ResultsHeader>
        {results.length > 0 && (
          <>
            <Toggle
              onCheck={setHideTaken}
              label="Only show available domains."
              labelFor="hideTaken"
            />
            <MediaMatch greaterThan="small">
              <span>{`${found} domains available. ${taken} taken.`}</span>
            </MediaMatch>
          </>
        )}
      </S.ResultsHeader>
    </>
  )
}

export default ResultsHeader
