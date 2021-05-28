import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import styled from 'styled-components'
import { auth, firestore } from '../../Services/FirebaseConnection'
import SellForm from './SellForm'

const Container = styled.div`
  background-color: rgb(255, 249, 241);
  height: calc(100vh - 80px);
`

const Scrolleable = styled.div`
  padding-top: 20px;

  h1 {
    font-size: 1.2em;
  }
`

const Sell = () => {
  const [user, loading] = useAuthState(auth)
  const sellersRef = firestore.collection('sellers')
  const query = sellersRef.where('uid', '==', auth.currentUser.uid)
  const [sellers] = useCollectionData(query, {idField: 'id'})

  useEffect(() => {
    if (user && !loading) {
      console.log(sellers)
    }
  })

  return(
    <Container>
      <Scrolleable>
        <h1>Vende un producto</h1>
        {
          sellers && (sellers.length === 0) && <p>Ingresa una tienda</p>
        }
        {
          sellers && (sellers.length > 0) && <SellForm seller={{name: '', direction: ''}} />
        }
      </Scrolleable>
    </Container>
  )
}

export default Sell
