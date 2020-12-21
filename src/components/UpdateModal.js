import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import styled from 'styled-components'
import Modal from './Modal'
import updateCompanyById from '../gql/updateCompanyById'
import updateInvestorById from '../gql/updateInvestorById'
import getInvestorById from '../gql/getInvestorById'
import getCompanyById from '../gql/getCompanyById'


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
`

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
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

const Input = styled.input`
  border: 0;
  outline: none;
  border-bottom: 1px solid #000000;
  padding: 10px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 13px;
  margin-top: 30px;

  &::placeholder {
    color: #888888;
  }
`

const UpdateModal = ({ isOpen, toggle, isCompany, record }) => {
  const mutation = isCompany ? updateCompanyById : updateInvestorById
  const query = isCompany ? getCompanyById : getInvestorById
  const [update, { loading }] = useMutation(mutation)

  const [name, setName] = useState(record.name)

  const onUpdate = async () => {
    await update({
      variables: {
        id: record.id,
        set: {
          name
        }
      },
      refetchQueries: [{
        query,
        variables: {
          id: record.id
        }
      }],
      awaitRefetchQueries: true
    })
    toggle()
  }


  return (
    <Modal isOpen={isOpen}>
      <Box>
        <Title>Update Name</Title>
        <Input
          placeholder="Enter name..."
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Row>
          <span onClick={toggle}>Cancel</span>
          <button onClick={onUpdate} disabled={loading || !name}>Update Name</button>
        </Row>
      </Box>
    </Modal>
  )
}

export default UpdateModal
