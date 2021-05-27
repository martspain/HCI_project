import React from 'react'
import './RecipeDisp.css'

const RecipeDisp = ({title, displayImage, ingredients, steps, author, descript}) => {
  return(
    <div style = {{width: '100%', backgroundColor: '#fff9f1', height:'90%', display:'flex', flexDirection:'column', overflowY:'auto'}}>
        <span >{title}</span>
        <img src = {displayImage} alt = 'La foto para esta receta no está disponible' style = {{width:'100%', height:'auto', margin: 'auto'}}></img>
        
        <div className = 'IngredientsDisplay'>
        <div className = 'recipeRowDisplay'>
        Ingredientes:
        </div>
        <div className = 'recipeRowDisplay'>
        <ul style={{listStyleType: 'none'}}>
            {ingredients.map(ingredient=>(<li>{ingredient}</li>))}
        </ul>
        </div>
        </div>
        <div className = 'stepsDisplay'>
        <div className = 'recipeRowDisplay'>
        Pasos:
        </div>
        <div className = 'recipeRowDisplay'>
        <ol style={{listStyleType: 'upper-roman'}}>
            {steps.map(step=>(<li>{step}</li>))}
        </ol>
        </div>
        </div>
        
    </div>
  )
}

export default RecipeDisp