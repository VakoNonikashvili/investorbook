import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Avatar from './Avatar'
import Pagination from './Pagination'

const Name = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 13px;
  text-decoration: none;
  color: #000;

  &:hover {
    color: #4970F8;
  }
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
`

const Table = styled.table`
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid #EEEEEE;
  }

  th {
    color: #797979;
    font-weight: 500;
    font-size: 12px;
    line-height: 11px;
    letter-spacing: 0.07em;
  }

  td, th {
    vertical-align: middle;
    padding: 15px 0;
    border-spacing: 0;
  }

  td.empty {
    text-align: center;
    font-weight: 500;
    font-size: 12px;
    line-height: 11px;
    letter-spacing: 0.07em;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const Content = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #6C6C6C;
`

const List = ({ loading, data, isCompany }) => {

  if (loading) return (
    <Col>
       <Table>
        <thead>
          <tr>
            <th align="left" style={{ width: '220px'}}>NAME</th>
            <th align="left">INVESTMENTS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="100" className="empty">
              Loading...
            </td>
          </tr>
        </tbody>
      </Table>
    </Col>
  )

  return (
    <Col>
      <Table>
        <thead>
          <tr>
            <th align="left" style={{ width: '220px'}}>NAME</th>
            <th align="left">INVESTMENTS</th>
          </tr>
        </thead>
        <tbody>
          {data[isCompany ? 'company' : 'investor'].map(item => {

            const to = isCompany ? `/company/${item.id}` : `/investor/${item.id}`

            return (
              <tr key={item.id}>
                <td>
                  <Row>
                    {!isCompany && <Avatar src={item.photo_thumbnail} />}
                    <Name to={to}>{item.name}</Name>
                  </Row>
                </td>
                <td>
                  <Content>
                    {item.investments.map(i => i[isCompany ? 'investor' : 'company'].name).join(', ')}
                  </Content>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <Pagination total={data[isCompany ? 'company_aggregate' : 'investor_aggregate'].aggregate.count} />
    </Col>
  )
}

export default List
