import { gql } from '@apollo/client'

const deleteInvestorById = gql`
  mutation deleteInvestorById ($id: Int!) {
    delete_investor (where: {
      id: {
        _eq: $id
      }
    }) {
      affected_rows
    }
  }
`

export default deleteInvestorById
