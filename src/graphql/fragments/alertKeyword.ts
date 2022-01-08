import { gql } from '@apollo/client'

export const AlertKeywordFragment = gql`
  fragment AlertKeywordFragment on AlertKeywords {
    id
    keyword
  }
`
