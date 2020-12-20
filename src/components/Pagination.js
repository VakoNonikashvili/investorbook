import React from 'react'
import styled, { css } from 'styled-components'
import { useLocation, useHistory } from 'react-router-dom'
import rightArrowIcon from '../assets/img/right-arrow.png'

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 11px;
  margin-top: 16px;

  select {
    border: 0;
    outline: none;
    margin-right: 30px;
    font-weight: 500;
    font-size: 12px;
    line-height: 11px;
  }

  span {
    margin-right: 10px;
  }
`

const Img = styled.img`
  cursor: pointer;

  ${p => p.disabled && css`
    pointer-events: none;
    opacity: .5;
    cursor: not-allowed;
  `}

  &:first-of-type {
    transform: rotate(180deg);
    margin-right: 5px;
  }
`

const Pagination = ({ total }) => {
  const { search, pathname } = useLocation()
  const history = useHistory()
  const queryParams = new URLSearchParams(search)

  const currentPage = queryParams.get('page') ? Number(queryParams.get('page')) : 1
  const perPage = queryParams.get('perPage') || 6
  const pageCount = Math.ceil(total / perPage)
  const hasNextPage = currentPage < pageCount
  const hasPreviousPage = currentPage > 1

  const lastItems = hasNextPage ? perPage * currentPage : total
  const text = `${perPage * currentPage - perPage + 1}-${lastItems} of ${total}`

  const onPrev = () => {
    queryParams.set('page', currentPage - 1)
    history.push({
      pathname: pathname,
      search: queryParams.toString()
    })
  }
  const onNext = () => {
    queryParams.set('page', currentPage + 1)
    history.push({
      pathname: pathname,
      search: queryParams.toString()
    })
  }

  return (
    <Row>
      <label htmlFor="perPage">Rows per page:</label>
      <select
        id="perPage"
        onChange={e => {
          const value = Number(e.target.value)
          queryParams.set('perPage', value)
          queryParams.delete('page')
          history.push({
            pathname: pathname,
            search: queryParams.toString()
          })
        }}
        value={perPage}
      >
        <option value="6">6</option>
        <option value="8">8</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      <span>
        {text}
      </span>
      <Img onClick={onPrev} disabled={!hasPreviousPage} src={rightArrowIcon} alt="right-arrow-icon" />
      <Img onClick={onNext} disabled={!hasNextPage} src={rightArrowIcon} alt="right-arrow-icon" />
    </Row>
  )
}

export default Pagination
