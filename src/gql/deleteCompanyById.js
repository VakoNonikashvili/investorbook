import { gql } from '@apollo/client'

const deleteCompanyById = gql`
  mutation deleteCompanyById ($id: Int!) {
    delete_company (where: {
      id: {
        _eq: $id
      }
    }) {
      affected_rows
    }
  }
`

export default deleteCompanyById
