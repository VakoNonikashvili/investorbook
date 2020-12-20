import { gql } from '@apollo/client'

const investorPagination = gql`
  query investorPagination ($limit: Int!, $offset: Int) {
    investor (limit: $limit, offset: $offset) {
      id
      name
      photo_thumbnail
      investments {
        id
        company {
          id
          name
        }
      }
    }
    investor_aggregate {
      aggregate {
        count
      }
    }
  }
`

export default investorPagination
