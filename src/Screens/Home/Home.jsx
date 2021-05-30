import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router-dom'
import Topbar from '../../Components/Logout/Topbar'
import Tabs from '../../Components/Tabs/Tabs'
import { auth } from '../../Services/FirebaseConnection'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  
  p h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-style: italic;
  }
`

const Home = () => {
  const history = useHistory()
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (!user && !loading) {
      history.push('/login')
    }
  })

  return (
    <div>
      <GlobalStyle />
      <Topbar/>
      <Tabs />
    </div>
  )
}

export default Home
