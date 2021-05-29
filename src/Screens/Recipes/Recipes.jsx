import React, { useState } from 'react'
import styled from 'styled-components'
import RecipeDisp from './RecipeDisp'
import RecipeBottomBar from './RecipeBottomBar'
import Search from '../../Components/Search/Search'
import { firestore } from '../../Services/FirebaseConnection'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const Container = styled.div`
  width: 100%;
  background-color: #fff9f1;
  height: calc(100vh - 80px);
  padding-top: 30px;
`

const Recipes = () => {
  const recipesRef = firestore.collection('recipes')
  const query = recipesRef.orderBy('name')
  const [recipes] = useCollectionData(query, {idField: 'id'})
  const [index, setIndex] = useState(0)
  
  return(
    <Container>
      <Search
        placeholder="Busca recetas, aprovecha cualquier ingrediente"
      />
      {
        recipes && (recipes.length > 0) &&
        <RecipeDisp
          title={recipes[index].name}
          displayImage={recipes[index].img}
          ingredients={recipes[index].ingredients}
          steps={recipes[index].steps}
          author={recipes[index].author}
          description={recipes[index].description}
        />
      }
      <RecipeBottomBar/>
    </Container>
  )
}

export default Recipes
