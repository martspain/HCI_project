import React from 'react'
import RecipeDisp from './RecipeDisp'
import RecipeBottomBar from './RecipeBottomBar'

const Recipes = () => {
let ing = ["ingrediente 1","ingrediente 2","ingrediente 3","ingrediente 4","ingrediente 5"]
let steps = ["paso 1", "paso 2", "paso 3", "paso 4", "paso 5","paso 1", "paso 2", "paso 3", "paso 4", "paso 5","paso 1", "paso 2", "paso 3", "paso 4", "paso 5","paso 1", "paso 2", "paso 3", "paso 4", "paso 5",]
  return(
    <div style = {{width: '100%', backgroundColor: 'blueviolet', height:'55vh'}}>
      <RecipeDisp title = 'Receta' ingredients = {ing} steps = {steps}/>
      <RecipeBottomBar/>
    </div>
  )
}

export default Recipes
