import React from 'react'
import styled from 'styled-components'
import RecipeDisp from './RecipeDisp'
import RecipeBottomBar from './RecipeBottomBar'
import Search from '../../Components/Search/Search'

const Container = styled.div`
  width: 100%;
  background-color: #fff9f1;
  height: calc(100vh - 80px);
  padding-top: 30px;
`

const Recipes = () => {
let ing = ["ingrediente 1","ingrediente 2","ingrediente 3","ingrediente 4","ingrediente 5"]
let steps = ["paso 1", "paso 2", "paso 3", "paso 4", "paso 5","paso 1", "paso 2", "paso 3", "paso 4", "paso 5","paso 1", "paso 2", "paso 3", "paso 4", "paso 5","paso 1", "paso 2", "paso 3", "paso 4", "paso 5",]
  return(
    <Container>
      <Search
        placeholder="Busca recetas, aprovecha cualquier ingrediente"
      />
      <RecipeDisp title = 'Nombre de la receta' ingredients = {ing} steps = {steps}/>
      <RecipeBottomBar/>
    </Container>
  )
}

export default Recipes
