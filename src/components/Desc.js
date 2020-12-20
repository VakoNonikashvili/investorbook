import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useIntl } from 'react-intl'
import Avatar from './Avatar'
import RemoveModal from './RemoveModal'
import UpdateModal from './UpdateModal'
import bigArrowImg from '../assets/img/big-arrow.png'
import deleteImg from '../assets/img/delete-icon.png'
import editImg from '../assets/img/edit-icon.png'


const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
`

const DescRow = styled.div`
  display: flex;
  align-items: center;

  > img {
    cursor: pointer;
  }
`

const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
`

const Name = styled.span`
  font-weight: 500;
  font-size: 24px;
  line-height: 22px;
`

const Total = styled.span`
  font-weight: 500;
  font-size: 15px;
  line-height: 14px;
  margin-top: 6px;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
`

const IconRow = styled.section`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    margin-right: 5px;
  }

  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 11px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  &:not(:last-child) {
    margin-right: 23px;
  }
`

const Desc = ({ isCompany, record }) => {
  const history = useHistory()
  const intl = useIntl()
  const [isRemoveOpen, setRemoveOpen] = useState(false)
  const [isUpdateOpen, setUpdateOpen] = useState(false)

  const toggleRemove = () => setRemoveOpen(open => !open)
  const toggleUpdate = () => setUpdateOpen(open => !open)

  const path = isCompany ? '/companies' : '/investors'
  const goToList = () => history.push(path)

  return (
    <Row>
      <DescRow>
        <img src={bigArrowImg} alt="back-icon" onClick={goToList} />
        <ProfileRow>
          {isCompany ? (
            <Name>{record.name}</Name>
          ) : (
            <>
              <Avatar src={record.photo_large} large />
              <Col>
                <Name>{record.name}</Name>
                <Total>
                  {`Total Amount Invested: ${intl.formatNumber(record.investments_aggregate.aggregate.sum.amount / 1000, { style: 'currency', currency: 'USD' })}`}
                </Total>
              </Col>
            </>
          )}
        </ProfileRow>
      </DescRow>
      <DescRow>
        <IconRow onClick={toggleUpdate}>
          <img src={editImg} alt="edit-icon" />
          <span>EDIT NAME</span>
        </IconRow>
        <IconRow onClick={toggleRemove}>
          <img src={deleteImg} alt="delete-icon" />
          <span>REMOVE {isCompany ? 'COMPANY' : 'INVESTOR'}</span>
        </IconRow>
      </DescRow>
      {isRemoveOpen && <RemoveModal isOpen={isRemoveOpen} toggle={toggleRemove} record={record} isCompany={isCompany} />}
      {isUpdateOpen && <UpdateModal isOpen={isUpdateOpen} toggle={toggleUpdate} record={record} isCompany={isCompany} />}
    </Row>
  )
}

export default Desc
