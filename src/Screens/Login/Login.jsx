import React, { useEffect } from 'react'
import firebase from 'firebase/app'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { auth } from '../../Services/FirebaseConnection'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ReactComponent as ChestIcon } from './chest.svg'

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');

  display: flex;
  height: 100vh;
  background-color: wheat;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 150px;
    * {
      fill: #d16700;
    }
  }

  & > p {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-style: italic;
  }
`

const Button = styled.button`
  background: white;
  border: 2px solid #d16700;
  color: gray;
  margin-top: 30px;
  border-radius: 3px;
  padding: 0.25em 1em;

  img {
    width: 30px;
    margin-right: 10px;
  }
`

const Login = () => {
  const history = useHistory()
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (user && !loading) {
      history.push('/')
    }
  })

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider).then((result) => {
      history.push('/')
    }).catch((error) => {
      alert(error.message)
    })
  }

  return (
    <Container>
      <ChestIcon />
      <p>THE FOOD CHEST</p>
      <Button onClick={signInWithGoogle}>
        <img
          src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
          alt="Google G Logo"
        />
        Ingresar con Google
      </Button>
    </Container>
  )
}

export default Login
