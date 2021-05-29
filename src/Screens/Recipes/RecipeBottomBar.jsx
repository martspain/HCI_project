import React from 'react'
import './RecipeDisp.css'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: orange;
  display: flex;
  position: fixed;
  bottom: 10px;
  flex-direction: row;
  justify-content: space-between;

  button {
    width: 100px;
    height: 100%;
    border: 0;
    background-color: orange;
    color: white;
    font-weight: bold;
    font-size: 1.5em;
  }
`

const RecipeBottomBar = ({goLeft, newRecipe, goRight}) => {
  return(
    <Container>
      <button onClick={goLeft}>{'<'}</button>
      <button onClick={newRecipe}>{'+'}</button>
      <button onClick={goRight}>{'>'}</button>
    </Container>
  )
}

export default RecipeBottomBar