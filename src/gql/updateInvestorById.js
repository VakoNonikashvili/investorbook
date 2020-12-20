import { gql } from '@apollo/client'

const updateInvestorById = gql`
  mutation updateInvestorById ($id: Int!, $set: investor_set_input) {
    update_investor (where: {
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

export default updateInvestorById
