import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router-dom'
import GetDataExample from '../../Components/GetDataExample/GetDataExample'
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
      <Tabs />
      <p>Home</p>
        {
          loading && <p>Cargando...</p>
        }
      <Logout />
      <GetDataExample />
    </div>
  )
}

export default Home
