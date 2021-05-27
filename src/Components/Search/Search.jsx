import React from 'react'
import styled from 'styled-components'
import { Search as SearchIcon } from '@material-ui/icons';

const Bar = styled.div`
  background-color: wheat;
  width: 100%;
  height: 30px;
  box-shadow: 0px 0px 7px #bebebe;
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  input {
    padding-left: 10px;
    width: 100%;
    height: 30px;
    text-align: left;
    font-size: 0.82em;
    border: 0;
    background-color: transparent;
    & + div {
      position: absolute;
      top: 28px;
      width: 0%;
      height: 2px;
      transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    &:focus {
      outline: none;
      & + div {
        width: 100%;
        background-color: orange;
      }
    }
  }

  svg {
    margin-top: 3px;
    position: absolute;
    top: 0px;
    right: 5px;
  }
`

const Search = ({ placeholder }) => {
  return (
    <Bar>
      <input
        placeholder={placeholder}
      />
      <div />
      <SearchIcon />
    </Bar>
  )
}

export default Search
