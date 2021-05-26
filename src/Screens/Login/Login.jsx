import React, { useEffect } from 'react'
import firebase from 'firebase/app'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { auth } from '../../Services/FirebaseConnection'
import { useAuthState } from 'react-firebase-hooks/auth'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
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
    <div>
      <Button onClick={signInWithGoogle}>login</Button>
    </div>
  )
}

export default Login
