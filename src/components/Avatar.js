import React from 'react'
import styled, { css } from 'styled-components'

const Img = styled.img`
  display: block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 15px;

  ${p => p.large && css`
    width: 53px;
    height: 53px;
  `}
`

const Avatar = ({ src, large }) => {

  return (
    <Img src={src} alt="user-avatar" large={large} />
  )
}

export default Avatar
