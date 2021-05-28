import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import styled from 'styled-components'
import { Add, Close } from '@material-ui/icons'
import { auth, firestore } from '../../Services/FirebaseConnection'
import Seller from '../../Components/Seller/Seller'
import MyProducts from '../../Components/MyProducts/MyProducts'
import SellForm from '../../Components/SellForm/SellForm'

const Container = styled.div`
  max-height: calc(100vh - 80px);
`

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: orange;
  box-shadow: 0px 0px 7px #bebebe;
  border: 0;
  position: fixed;
  bottom: 10px;
  right: calc(-200vw + 10px);
  z-index: 2;

  * {
    color: white;
  }
`

const FloatForm = styled.div`
  width: 100%;
  background-color: wheat;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0px 0px 7px #bebebe;
  position: fixed;
  transition: 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  z-index: 1;

  ${(props) => (
    !props.active ?
    `
      bottom: -500px;
    ` :
    `
      bottom: 0px;
    `
  )}
`

const Sell = () => {
  const [user, loading] = useAuthState(auth)
  const sellersRef = firestore.collection('sellers')
  const query = sellersRef.where('uid', '==', auth.currentUser.uid)
  const [sellers] = useCollectionData(query, {idField: 'id'})
  const [toAdd, setToAdd] = useState(false)

  useEffect(() => {
    if (user && !loading) {
      console.log(sellers)
    }
  })

  return(
    <>
      <Container>
        {
          sellers && (sellers.length === 0) && <Seller />
        }
        {
          sellers && (sellers.length > 0) && <MyProducts seller={{name: sellers[0].name, direction: sellers[0].direccion}} />
        }
      </Container>
      {
        sellers && (sellers.length > 0) && (
          <>
            <FloatButton onClick={() => setToAdd((old) => !old)}>
              {toAdd ? <Close /> : <Add />}
            </FloatButton>
            <FloatForm active={toAdd} >
              <SellForm seller={{name: sellers[0].name, direction: sellers[0].direccion}} />
            </FloatForm>
          </>
        )
      }
    </>
  )
}

export default Sell
