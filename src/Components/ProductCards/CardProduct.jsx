import React from 'react'
import './products.css'
import * as FaIcons from 'react-icons/fa'

const CardProduct = ({
    cartFun,
    title,
    price,
    unit,
    seller,
    img,
}) => {
    return (
        <div className='carousel-item active cardProduct-container'>
            <img className="cardProduct-image" src={img}></img>
            <div className="row cardProduct-line1">
                <h5 className="col-8 cardProduct-title">{title}</h5>
                <FaIcons.FaCartPlus className="col-3 cardProduct-cartIcon" onClick={cartFun} />
            </div>
            <p className="margin-zero cardProduct-text">{`Q.${price} x ${unit}`}</p>
            <p className="margin-zero cardProduct-text">{seller}</p>
        </div>
    )
}
export default CardProduct