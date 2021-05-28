import React, { useState } from 'react'
import styled from 'styled-components'
import { firestore } from '../../Services/FirebaseConnection'

const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;

    p {
      margin: 0;
      width: 100%;
      text-align: left;
    }

    input, select, textarea {
      width: 100%;
      height: 25px;
      box-sizing: border-box;
      margin-bottom: 15px;
      border: 0;
      border-bottom: 2px solid #e2e2e2;
      transition: border 0.5s cubic-bezier(0.19, 1, 0.22, 1);

      & + div {
        width: 0%;
        height: 2px;
        background-color: orange;
        position: relative;
        top: -15px;
        transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
      }

      &:focus {
        outline: none;
        border-bottom: 2px solid transparent;
        transition: border 0s;

        & + div {
          width: 100%;
          height: 2px;
          background-color: orange;
          position: relative;
          top: -15px;
        }
      }
    }

    textarea {
      height: 75px;
    }

    .price {
      display: flex;
      flex-direction: row;

      & > div {
        width: 50%;
        margin-bottom: 15px;

        input {
          margin-bottom: 0;
          & + div {
            top: 0px;
          }
        }
      }

      & > div:first-of-type {
        padding-right: 15px;

        & > div {
          display: flex;
          flex-direction: row;
          align-items: center;

          p {
            width: auto;
            margin-right: 10px;
          }

          div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      }
    }

    button {
      margin: 15px;
      background-color: orange;
      color: white;
      border-radius: 5px;
      border: 0px;
      width: 150px;
    }
  }
`

const SellForm = ({ seller }) => {
  const [product, setProduct] = useState({
    category: '',
    title: '',
    flaws: '',
    price: 0,
    priceUnit: '',
    bestBy: Date.now(),
    img: 'src',
    seller: seller.name,
    direction: seller.direction,
    onSale: true
  })
  const productsRef = firestore.collection('products')

  const publishProduct = async (e) => {
    e.preventDefault()
    productsRef.add({
      ...product,
      img: 'https://media.istockphoto.com/photos/strawberry-isolated-on-white-background-picture-id1155880251?k=6&m=1155880251&s=612x612&w=0&h=9ELTZSU18xWi-k2jpHyAekmLJyRmeLEoPfjkOdf9L3o=',
      seller: seller.name,
      direction: seller.direction,
    }).then(() => {
      alert('Producto publicado correctamente')
      setProduct({
        category: '',
        title: '',
        flaws: '',
        price: 0,
        priceUnit: '',
        bestBy: Date.now(),
        img: '',
        seller: seller.name,
        direction: seller.direction,
        onSale: true
      })
    })
  }
  return (
    <Container>
      <form onSubmit={publishProduct}>
        <p>Categoría</p>
        <select
          value={product.category}
          onChange={(e) => setProduct((old) => {
            return ({
              ...old, category: e.target.value
            })
          })}
          defaultValue="Producto Natural"
        >
          <option value="Producto Natural">Producto Natural</option>
          <option value="Producto Empacado">Producto Empacado</option>
          <option value="Comida preparada">Comida Preparada</option>
        </select>
        <div />
        <p>Producto</p>
        <input
          value={product.title}
          onChange={(e) => setProduct((old) => {
            return ({
              ...old, title: e.target.value
            })
          })}
          placeholder="Nombre del producto"
        />
        <div />
        <p>Descripción</p>
        <textarea
          value={product.flaws}
          onChange={(e) => setProduct((old) => {
            return ({
              ...old, flaws: e.target.value
            })
          })}
          placeholder="Describe características especiales del producto"
        />
        <div />
        <div className="price">
          <div>
            <p>Precio</p>
            <div>
              <p>Q</p>
              <div>
                <input
                  value={product.price}
                  onChange={(e) => setProduct((old) => {
                    return ({
                      ...old, price: e.target.value
                    })
                  })}
                  type="number"
                  placeholder="0.00"
                />
                <div />
              </div>
            </div>
          </div>
          <div>
            <p>Unidad de precio</p>
            <select
              value={product.priceUnit}
              onChange={(e) => setProduct((old) => {
                return ({
                  ...old, priceUnit: e.target.value
                })
              })}
              defaultValue="por libra"
            >
              <option value="" disabled>por unidad</option>
              <option value="por libra">por libra</option>
              <option value="por mano">por mano</option>
              <option value="por docena">por docena</option>
              <option value="por porción">por porción</option>
              <option value="por racimo">por racimo</option>
            </select>
            <div />
          </div>
        </div>
        <p>Consumir antes de:</p>
        <input
          value={product.bestBy}
          onChange={(e) => setProduct((old) => {
            return ({
              ...old, bestBy: e.target.value
            })
          })}
          type="date"
        />
        <div />
        <button type="submit">Publicar</button>
      </form>
    </Container>
  )
}

export default SellForm
