import React from 'react'
import styled from 'styled-components'
import { useIntl } from 'react-intl'
import editImg from '../assets/img/edit-icon.png'
import deleteImg from '../assets/img/delete-icon.png'

const Row = styled.div`
  display: flex;
  align-items: center;

  img {
    cursor: pointer;
  }

  img:not(:last-child) {
    margin-right: 30px;
  }
`

const Table = styled.table`
  margin-left: 50px;
  margin-top: 20px;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid #EEEEEE;
  }

  th {
    font-weight: 500;
    font-size: 12px;
    line-height: 11px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    text-align: left;
    color: #797979;
    padding: 10px;
  }

  th:last-of-type {
    width: 62px;
  }

  td {
    padding: 23px 10px;
  }

  td:first-of-type {
    font-weight: 500;
    font-size: 14px;
    line-height: 13px;
  }

  td:not(:first-of-type) {
    font-weight: 500;
    font-size: 12px;
    line-height: 11px;
    color: #242424;
  }
`

const DataTable = ({ isCompany, record }) => {
  const intl = useIntl()

  return (
    <Table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>AMOUNT</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {record.investments.map(item => {

          return (
            <tr key={item.id}>
              <td>{item[isCompany ? 'investor' : 'company'].name}</td>
              <td>
                {intl.formatNumber(item.amount / 1000, { style: 'currency', currency: 'USD' })}
              </td>
              <td>
                <Row>
                  <img src={editImg} alt="edit-icon" />
                  <img src={deleteImg} alt="delete-icon" />
                </Row>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default DataTable
