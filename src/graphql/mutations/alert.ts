import { gql } from '@apollo/client'
import { AlertKeywordFragment } from 'graphql/fragments/alertKeyword'

export const MUTATION_CREATE_ALERT = gql`
  mutation MutationCreateAlert($input: createAlertInput!) {
    createAlert(input: $input) {
      alert {
        id
        keywords {
          ...AlertKeywordFragment
        }
      }
    }
  }
  ${AlertKeywordFragment}
`

export const MUTATION_UPDATE_ALERT = gql`
  mutation MutationUpdateAlert($input: updateAlertInput) {
    updateAlert(input: $input) {
      alert {
        id
        keywords {
          ...AlertKeywordFragment
        }
      }
    }
  }
  ${AlertKeywordFragment}
`
