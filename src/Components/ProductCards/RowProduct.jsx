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
    toCart,
}) => {
    return (
        <div key={`${title} + ${price}`} className="col-10 rowProd-container">
            <div className="row rowProd-header">
                <h5 className="col-12 rowProd-category">{`${category}`}</h5>
            </div>
            <div className="row rowProd-infoContainer">
                <h3>{title}</h3>
                <div className="col-6 align-items-center rowProd-leftPart">
                    <img src={image} className="col-12 rowProd-image " alt="imagen" />
                    <p className="col-12 align-top prodDescription margin-zero">{`Vence el: ${bestBy}`}</p>
                </div>
                <div className="col-6 margin-zero rowProd-rightPart">
                    <div className="row rowProd-direction">
                        <p className="rowProd-seller ">{seller}</p>
                        <Io5Icons.IoLocationOutline className="col-1 margin-zero rowProd-locIcon" />
                        <p className="col-10 rowProd-p ">{direction}</p>
                    </div>
                    <p className="rowProd-p margin-zero">{flaws}</p>
                    <p className="rowProd-p ">{`Q.${price} x ${priceUnit}`}</p>
                    <div className="row ">
                        <FaIcons.FaCartPlus onClick={toCart} className="col-12 rowProd-Btns" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RowProduct;