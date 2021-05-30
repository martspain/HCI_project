import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import styled from 'styled-components'
import { firestore } from '../../Services/FirebaseConnection'

const Container = styled.div`
  background-color: rgb(255, 249, 241);
  padding-top: 15px;
  min-height: calc(100vh - 80px);

  h1 {
    font-size: 1em;
  }
`

const MyProducts = ({ seller }) => {
  const productsRef = firestore.collection('products')
  const queryMyProducts = productsRef.where('seller', '==', seller.name)
  const [products] = useCollectionData(queryMyProducts, { idField: 'id' })

  return (
    <Container>
      <h1>Mis productos publicados</h1>
      {
        products && products.map((product) => <p>{product.title}</p>)
      }
    </Container>
  )
}

export default MyProducts
