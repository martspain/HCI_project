import React from 'react'
import Logout from './Logout'

const Topbar = () => {

  return  (
    <div style = {{display:'flex', flexDirection:'row', justifyItems:'flex-start', width:'100%', backgroundColor:'#ffc971'}}>
      <div style = {{flexGrow:1, display:'flex', justifyItems:'flex-start'}}>
      <Logout/>
      </div>
      <span style = {{flexGrow:1}}>THE FOOD CHEST</span>
      <div style = {{flexGrow:1, display:'flex', flexDirection:'row-reverse'}}>
          icono carrito</div>
      
    </div>
  )
}

export default Topbar