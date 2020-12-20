import { gql } from '@apollo/client'

const getInvestorById = gql`
  query getInvestorById ($id: Int!) {
    investor (where: {
      id: {
        _eq: $id
      }
    }) {
      id
      name
      photo_large
      investments (limit: 5) {
        id
        amount
        company {
          id
          name
        }
      }
      investments_aggregate {
        aggregate {
          sum {
            amount
          }
        }
      }
    }
  }
`

export default getInvestorById
