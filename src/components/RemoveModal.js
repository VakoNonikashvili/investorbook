import React from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import styled from 'styled-components'
import Modal from './Modal'
import deleteCompanyById from '../gql/deleteCompanyById'
import deleteInvestorById from '../gql/deleteInvestorById'


const Box = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 2px 6px 4px rgba(136, 141, 154, 0.1);
  border-radius: 4px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  min-width: 400px;
`

const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 17px;
  text-align: center;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  span {
    font-weight: 500;
    font-size: 13px;
    line-height: 12px;
    color: #434FBC;
    cursor: pointer;
    margin-right: 15px;
    cursor: pointer;
  }

  button {
    outline: none;
    border: 0;
    background: #434FBC;
    border-radius: 4px;
    font-weight: 500;
    font-size: 13px;
    line-height: 12px;
    color: #FFFFFF;
    padding: 7px 10px;
    cursor: pointer;

    &:disabled {
      opacity: .5;
    }
  }
`

const RemoveModal = ({ isOpen, toggle, isCompany, record }) => {
  const history = useHistory()
  const mutation = isCompany ? deleteCompanyById : deleteInvestorById
  const [remove, { loading }] = useMutation(mutation)

  const onRemove = async () => {
    await remove({
      variables: {
        id: record.id
      }
    })
    history.push(isCompany ? '/companies' : '/investors')
  }


  return (
    <Modal isOpen={isOpen}>
      <Box>
        <Title>Remove {isCompany ? 'Comapny' : 'Investor'}?</Title>
        <Row>
          <span onClick={toggle}>Cancel</span>
          <button onClick={onRemove} disabled={loading}>Remove</button>
        </Row>
      </Box>
    </Modal>
  )
}

export default RemoveModal
