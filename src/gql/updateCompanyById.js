import { gql } from '@apollo/client'

const updateCompanyById = gql`
  mutation updateCompanyById ($id: Int!, $set: company_set_input) {
    update_company (where: {
      id: {
        _eq: $id
      }
    }, _set: $set) {
      affected_rows
      returning {
        id
        name
      }
    }
  }
`

export default updateCompanyById
