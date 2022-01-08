import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { AlertKeywordFragment } from 'graphql/fragments/alertKeyword'
import { QueryAlert, QueryAlertVariables } from 'graphql/generated/QueryAlert'

export const QUERY_ALERT = gql`
  query QueryAlert($identifier: String!) {
    alerts(where: { user: { email: $identifier } }) {
      id
      keywords {
        ...AlertKeywordFragment
      }
    }
  }
  ${AlertKeywordFragment}
`

export function useQueryAlert(
  options?: QueryHookOptions<QueryAlert, QueryAlertVariables>
) {
  return useQuery<QueryAlert, QueryAlertVariables>(QUERY_ALERT, options)
}
