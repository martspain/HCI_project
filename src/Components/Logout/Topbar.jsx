import React from 'react'
import Logout from './Logout'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useHistory } from 'react-router-dom'

const Topbar = () => {

  const history = useHistory()

  const navToCart = () =>{
    history.push('/cart');
  }

  return  (
    <div style = {{display:'flex', flexDirection:'row', justifyItems:'space-between', width:'100%', backgroundColor:'#ffc971'}}>
      <div style = {{flexGrow:1, display:'flex', justifyItems:'flex-start'}}>
      <Logout/>
      </div>
      <span style={{ transform: 'translateX(-105px) translateY(4px)' }}>THE FOOD CHEST</span>
      <div style = {{display:'flex', flexDirection:'row-reverse'}}>
        <AiOutlineShoppingCart id="topBar-cartIcon" onClick={() => navToCart()}/>
      </div>
      
    </div>
  )
}

export default Topbar