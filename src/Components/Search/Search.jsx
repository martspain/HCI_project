import React from 'react'
import styled from 'styled-components'
import { Search as SearchIcon } from '@material-ui/icons';

const Bar = styled.div`
  background-color: wheat;
  width: 100%;
  height: 30px;
  box-shadow: 0px 0px 7px #bebebe;
  display: grid;
  grid-template-columns: 1fr 30px;

  input {
    margin-left: 10px;
    text-align: left;
    border: 0;
    background-color: transparent;

    &:focus {
      outline: none;

      &:before {
        content: '';
        border-bottom: 2px solid orange;
      }
    }
  }

  svg {
    margin-top: 3px;
  }
`

const Search = () => {
  return (
    <Bar>
      <input />
      <SearchIcon />
    </Bar>
  )
}

export default Search
