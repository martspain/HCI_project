import React, { useState, useEffect } from 'react'
import { auth, firestore } from '../../Services/FirebaseConnection'
import RowProduct from '../../Components/ProductCards/RowProduct'
import './Food.css'
import Search from '../../Components/Search/Search'

const Food = () => {
  const response = firestore.collection('products')
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const orderRef = firestore.collection('order')

  const searchProduct = () => {
    let coming = document.getElementById("searchBarInput");
    let search = coming.value.toLowerCase();
    if (search === "") {
      setVisibleProducts(products);
    } else {
      setVisibleProducts([]);
      products.forEach((prod) => {
        let product = prod.data().title;
        let prodLower = product.toLowerCase();
        let category = prod.data().category;
        let catLower = category.toLowerCase();
        if (prodLower.includes(search) || catLower.includes(search)) {
          setVisibleProducts((oldArray) => [...oldArray, prod]);
        }
      });
    }
  };

  const fetchProds = async () => {
    const data = await response.get();
    data.docs.forEach((item) => {
      setProducts((oldArray) => [...oldArray, item]);
      setVisibleProducts((oldArray) => [...oldArray, item]);
    });
  };

  const addToCart = (item) => {
    if(item.data().title !== undefined && item.data().price !== undefined && item.data().priceUnit !== undefined && item.data().category){
      orderRef.add({
        orderedBy: auth.currentUser.email,
        itemName: item.data().title,
        itemPrice: `${item.data().price} x ${item.data().priceUnit}`,
        category: item.data().category
      })
      alert("Producto agregado exitosamente.")
    }
  }

  useEffect(() => {
    fetchProds();
  }, []);

  //realizar el mapping de los productos con visileProducts
  return (
    <div className="Food-Container">
      <Search SearchFun={searchProduct}
        placeholder="Busca comida o categorias, ¡No dejes que se desperdicien!"
      />
      <div className="Food-container">
        <h1>Productos</h1>
        <div className="row Food-container justify-content-center">
          {visibleProducts.map((elem, index) => {
            console.log(elem.data())
            return (
              <RowProduct cartFun={() => addToCart(elem)} seller={elem.data().seller} title={elem.data().title} price={elem.data().price}
                unit={elem.data().priceUnit} direction={elem.data().direction} flaws={elem.data().flaws} bestBy={elem.data().bestBy}
                image={elem.data().img}  category={elem.data().category} priceUnit={elem.data().priceUnit} toCart={() => addToCart(elem)}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Food;
