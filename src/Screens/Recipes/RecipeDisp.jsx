import React from 'react'
import styled from 'styled-components'
import './RecipeDisp.css'

const Container = styled.div`
  width: 100%;
  background-color: #fff9f1;
  height: calc(100vh - 80px);
  display: flex;
  padding-bottom: 100px;
  flex-direction: column;
  overflow-y: auto;

  h1 {
    font-size: 1.2em;
    margin-top: 10px;
    margin-bottom: 0;
  }

  & > .author {
    font-size: 0.8em;
    margin-bottom: 0;
  }

  & > .description {
    font-size: 1em;
    margin-bottom: 0;
    padding: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .IngredientsDisplay {
    padding-top: 10px;
    padding-left: 25px;
    text-align: left;

    h2 {
      font-size: 1.1em;
    }

    .ingredient {
      background-color: wheat;
      width: fit-content;
      min-width: 100px;
      text-align: center;
      margin-left: 25px;
      border-radius: 5px;
    }
  }

  .stepsDisplay {
    text-align: left;
    padding-left: 25px;

    h2 {
      font-size: 1.1em;
    }

    .step {
      background-color: white;
      padding: 5px;
      width: fit-content;
      min-width: 100px;
      max-width: 90%;
      text-align: center;
      margin-left: 25px;
      border-radius: 5px;
      box-shadow: 0px 0px 7px #bebebe;
      text-align: left;
    }
  }
`

const RecipeDisp = ({title, displayImage, ingredients, steps, author, description}) => {
  return(
    <Container>
        <img src = {displayImage} alt = 'La foto para esta receta no está disponible'></img>
        <h1>{title}</h1>
        <p className="author">{author}</p>
        <p className="description">{description}</p>
        <div className = 'IngredientsDisplay'>
          <h2>
            Ingredientes:
          </h2>
          <div>
            {ingredients.map(ingredient=>(<p className='ingredient'>{ingredient}</p>))}
          </div>
        </div>
        <div className = 'stepsDisplay'>
          <h2>
          Pasos:
          </h2>
          <div>
            {steps.map(step=>(<p className="step">{step}</p>))}
          </div>
        </div>
    </Container>
  )
}

export default RecipeDisp