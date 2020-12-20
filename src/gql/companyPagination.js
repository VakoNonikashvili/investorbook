import { gql } from '@apollo/client'

const companyPagination = gql`
  query companyPagination ($limit: Int!, $offset: Int) {
    company (limit: $limit, offset: $offset) {
      id
      name
      investments {
        id
        investor {
          id
          name
        }
      }
    }
    company_aggregate {
      aggregate {
        count
      }
    }
  }
`

export default companyPagination
