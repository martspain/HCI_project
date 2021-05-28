import React, { useState } from 'react'
import { auth, firestore } from '../../Services/FirebaseConnection'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import CardProduct from '../../Components/ProductCards/CardProduct'
import './Food.css'
import { FaPodcast } from 'react-icons/fa'
import Search from '../../Components/Search/Search'
import RowProduct from '../../Components/ProductCards/RowProduct'

const Food = () => {
  const response = firestore.collection('products')
  const [products] = useCollectionData(response, { idField: 'id' })
  console.log(products)
  return (
    <div className="Food-Container">
      <Search
        placeholder="Busca comida, no dejes que se desperdicie"
      />
      <div className="Food-Scrolleable">
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
          <a className="carousel-control-prev" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Food;
