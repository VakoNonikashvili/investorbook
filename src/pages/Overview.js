import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import Desc from '../components/Desc'
import DataTable from '../components/DataTable'
import getCompanyById from '../gql/getCompanyById'
import getInvestorById from '../gql/getInvestorById'


const Col = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
  margin-left: 50px;
`

const Heading = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 14px;
`

const Text = styled.span`
  font-weight: 500;
  font-size: 15px;
  line-height: 14px;
  color: #333FAD;
  margin-left: 12px;
  cursor: pointer;
`

const Overview = ({ isCompany }) => {
  const { id } = useParams()

  const query = isCompany ? getCompanyById : getInvestorById

  const { loading, data} = useQuery(query, {
    variables: {
      id
    },
    fetchPolicy: 'network-only'
  })

  if (loading) {
    return (
      <h3>Loading...</h3>
    )
  }

  const record = data[isCompany ? 'company' : 'investor'][0]

  if (!record) {
    return (
      <h1>404 Error, record not found</h1>
    )
  }

  return (
    <Col>
      <Desc record={record} isCompany={isCompany} />
      <Row>
        <Heading>{isCompany ? 'Investors' : 'Investments'}</Heading>
        <Text>{isCompany ? '+ Add Investors' : '+ Add Investments'}</Text>
      </Row>
      <DataTable
        record={record}
        isCompany={isCompany}
      />
    </Col>
  )
}

export default Overview
