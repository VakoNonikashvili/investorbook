import React from 'react'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import Tabs from '../components/Tabs'
import List from '../components/List'
import companyPagination from '../gql/companyPagination'
import investorPagination from '../gql/investorPagination'

const Col = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

const Heading = styled.h2`
  font-weight: 500;
  font-size: 28px;
  line-height: 26px;
`

const Button = styled.button`
  border: 1.4px solid #616DD7;
  border-radius: 4px;
  font-weight: 500;
  font-size: 13px;
  line-height: 12px;
  color: #434FBC;
  padding: 6px 12px;
  margin-left: 30px;
  background: #fff;
  cursor: pointer;
  outline: none;
`




const Investors = ({ isCompany }) => {
  const { search } = useLocation()
  const queryParams = new URLSearchParams(search)
  const currentPage = queryParams.get('page') ? Number(queryParams.get('page')) : 1
  const perPage = queryParams.get('perPage') ? Number(queryParams.get('perPage')) : 6

  const query = isCompany ? companyPagination : investorPagination

  const { loading, data} = useQuery(query, {
    variables: {
      limit: perPage,
      offset: (currentPage - 1) * perPage
    },
    fetchPolicy: 'network-only'
  })

  return (
    <Col>
      <Tabs />
      <Row>
        <Heading>{isCompany ? 'Companies' : 'Investors'}</Heading>
        <Button>{isCompany ? 'Add Company' : 'Add Investor'}</Button>
      </Row>
      <List
        loading={loading}
        data={data}
        isCompany={isCompany}
      />
    </Col>
  )
}

export default Investors
