import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router-dom'
import Logout from '../../Components/Logout/Logout'
import Tabs from '../../Components/Tabs/Tabs'
import { auth } from '../../Services/FirebaseConnection'

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
      <Logout />
      <Tabs />
    </div>
  )
}

export default Home
