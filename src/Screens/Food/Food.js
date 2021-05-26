import React, { useEffect, useState } from 'react'
import { auth, firestore } from '../../Services/FirebaseConnection'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import * as AiIcons from 'react-icons/ai'
import CardProduct from '../../Components/ProductCards/CardProduct'
import './Food.css'

const Food = () => {
    const response = firestore.collection('products')
    const [products] = useCollectionData(response, { idField: 'id' })
    return (
        < div className="Food-Container" >
            { products && products.map((doc) => {
                return (
                    <div className="row Food-row">
                        <div className="row Food-header">
                            <h1 className="col-10 homePFoodaFoodge-Title">OFERTAS</h1>
                            <AiIcons.AiOutlineRight className="col-2 homePage-rightArrow" />
                        </div>
                        <div className="Food-prods">
                            <CardProduct title={doc.title} />
                        </div>
                    </div>
                )
            })}
        </div >
    )
}