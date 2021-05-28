import React from 'react'
import './RecipeDisp.css'

const RecipeBottomBar = ({goLeft, newRecipe, goRight}) => {
  const left = '<'
  const right = '>'
  return(
    <div className = 'RecipeBottomBar'>
      <button className = 'recipeBottomBut' onClick={goLeft}> {left} </button>
      <button className = 'recipeBottomBut' onClick={newRecipe}> + </button>
      <button className = 'recipeBottomBut' onClick={goRight}> {right} </button>
    </div>
  )
}

export default RecipeBottomBar