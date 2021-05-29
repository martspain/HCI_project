import React from 'react'
import { useHistory } from 'react-router'
import { auth } from '../../Services/FirebaseConnection'

const Logout = () => {
  const history = useHistory()
  const logout = () => {
    auth.signOut().then(() => {
      history.push('/login')
    }).catch((error) => {
      alert(`No se pudo cerrar sesion, error ${error}`)
    })
  }

  return auth.currentUser && (
<<<<<<< Updated upstream
    <div style = {{flexGrow:1}}>
      <button onClick={logout} style = {{width: '100%', backgroundColor:'#ffc971', height:'100%', borderWidth: '0px'}}>Cerrar sesion</button>
=======
    <div>
      <button onClick={logout} style = {{flexGrow: 1}}>Cerrar sesion</button>
>>>>>>> Stashed changes
    </div>
  )
}

export default Logout
