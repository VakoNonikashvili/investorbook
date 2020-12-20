import { gql } from '@apollo/client'

const getCompanyById = gql`
  query getCompanyById ($id: Int!) {
    company (where: {
      id: {
        _eq: $id
      }
    }) {
      id
      name
      investments (limit: 5) {
        id
        amount
        investor {
          id
          name
        }
      }
    }
  }
`

export default getCompanyById
