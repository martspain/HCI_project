import React from 'react'
import './products.css'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from '../../Services/FirebaseConnection'
import * as Io5Icons from 'react-icons/io5'
import * as FaIcons from 'react-icons/fa'
import * as GrIcons from 'react-icons/gr'

const RowProduct = ({
    category,
    bestBy,
    seller,
    title,
    price,
    priceUnit,
    direction,
    image,
    flaws,
    toCart
}) => {
    return (
        <div key={`${title} + ${price}`} className="col-5 rowProd-container">
            <div className="row rowProd-header">
                <h5 className="col-12 rowProd-category">{`#${category}`}</h5>
            </div>
            <div className="row rowProd-infoContainer">
                <div className="col-6 align-items-center rowProd-leftPart">
                    <img src={image} className="col-12 rowProd-image " alt="imagen" />
                    <p className="col-12 align-top prodDescription margin-zero">{`Vence el: ${bestBy}`}</p>
                </div>
                <div className="col-6 margin-zero rowProd-rightPart">
                    <p className="rowProd-p ">{seller}</p>
                    <p className="rowProd-p ">{`Q.${price} x ${priceUnit}`}</p>
                    <div className="row rowProd-direction">
                        <Io5Icons.IoLocationOutline className="col-2 margin-zero rowProd-locIcon" />
                        <p className="col-10 rowProd-p ">{direction}</p>
                    </div>
                    <p className="rowProd-p margin-zero">{flaws}</p>
                    <div className="row ">
                        <GrIcons.GrNotes className="col-5 margin-zero rowProd-Btns" />
                        <FaIcons.FaCartPlus onClick={toCart} className="col-5 margin-zero rowProd-Btns" />
                    </div>
                </div>
            </div>
        </div>
    )
}
{/* 
<h4 className="col rowProd-title ">{title}</h4>
<div className="row align-items-center">
    <img src={image} className="col-7 align-middle productImage " alt="imagen" />
    
</div>
<div className="row align-items-center margin-zero">
</div> */}
export default RowProduct;