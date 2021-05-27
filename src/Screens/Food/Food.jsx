import React, { useState } from 'react'
import { auth, firestore } from '../../Services/FirebaseConnection'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import CardProduct from '../../Components/ProductCards/CardProduct'
import './Food.css'
import { FaPodcast } from 'react-icons/fa'

const Food = () => {
    const response = firestore.collection('products')
    const [products] = useCollectionData(response, { idField: 'id' })
    return (
        <>
            <div className="Food-Containter">
                <h1>Ofertas</h1>
                <div className="carousel slide Food-customCarousel" data-ride="carousel" data-type="multi">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="row justify-content-center">
                                <div className="col-2 Food-test">Uno</div>
                                <div className="col-2 Food-test">Dos</div>
                                <div className="col-2 Food-test">tRES</div>
                                <div className="col-2 Food-test">CUATRO</div>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <div className="row justify-content-center">
                                <div className="col-2 Food-test">Cinco</div>
                                <div className="col-2 Food-test"></div>
                                <div className="col-2 Food-test"></div>
                                <div className="col-2 Food-test"></div>
                            </div>
                        </div>
                    </div>

                    <a class="carousel-control-prev" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>

                </div>
            </div>
        </>
    )
}

export default Food;

/*<div className="Food-Container" >
            { products && products.map((doc) => {
                return (
                    <div className="row Food-row">
                        <CardProduct title={doc.title} img={doc.img} />
                    </div>
                )
            })}
        </div >*/

/*
<div className="Food-carousel-col">
                            { products && products.map((doc) => {
                                return (
                                    <CardProduct title={doc.title} img={doc.img}
                                    price={doc.price} seller={doc.seller} unit={doc.priceUnit} /> 
                                )
                            })}
                        </div>
*/