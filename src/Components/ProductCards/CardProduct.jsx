import React from 'react'
import './products.css'

const CardProduct = ({
    onClick,
    title,
    price,
    seller,
    img
}) =>{
    return(
        <div className='row cardProduct-container'>
            <h1>{title}</h1>
        </div>
    )
}
export default CardProduct