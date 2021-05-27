import React from 'react'
import './products.css'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from '../../Services/FirebaseConnection'

const RowProduct = ({
    onClick,
    text,
    title,
    imgLink,
    precio,
    buttonText,
}) => {
    return(
    <div key={`${title} + ${buttonText}`} className="col-5 eProductCard">
        <h2 className="col align-middle productName ">{title}</h2>
        <div className="row align-items-center">
            <img src={imgLink} className="col-7 align-middle productImage " alt="imagen" />
            <p className="col-4 align-top prodDescription margin-zero">{text}</p>
        </div>
        <div className="row align-items-center margin-zero">
            <h2 className="col-6 align-middle productPrice ">{`Q.${precio}`}</h2>
        </div>
        <button className="addBtn" id={`but-${buttonText}`} type="button" onClick={onClick}>
            {buttonText}
        </button>
    </div>
    )