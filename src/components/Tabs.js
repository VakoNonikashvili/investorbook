import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000;
  margin-top: 35px;
`

const Tab = styled(NavLink)`
  display: flex;
  padding: 10px 15px;
  border-bottom: 3px solid transparent;
  color: #A0A0A0;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 14px;

  &.active {
    border-color: #000;
    color: #000;
  }
`

const Tabs = () => {

  return (
    <Row>
      <Tab to="/investors">Investors</Tab>
      <Tab to="/companies">Companies</Tab>
    </Row>
  )
}

export default Tabs
