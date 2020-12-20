import React from 'react'
import styled from 'styled-components'

const Brand = styled.h1`
  font-weight: bold;
  font-size: 20px;
  line-height: 18px;
  letter-spacing: 0.18em;
`

const H = styled.span`
  color: #4970F8;
  letter-spacing: 0.18em;
`


const Header = () => {

  return (
    <Brand>
      <H>INVESTOR</H>BOOK
    </Brand>
  )
}

export default Header
