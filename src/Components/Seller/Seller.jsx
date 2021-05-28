import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import styled from 'styled-components'
import { auth, firestore } from '../../Services/FirebaseConnection'

const Container = styled.div`
  width: 100%;
  padding: 15px;
  min-height: calc(100vh - 80px);
  background-color: rgb(255, 249, 241);
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 1em;
    position: relative;
    top: -30px;
  }

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

const Seller = () => {
  const [seller, setSeller] = useState({
    name: '',
    direccion: '',
    uid: ''
  })
  const sellersRef = firestore.collection('sellers')
  const [user, loading] = useAuthState(auth)

  const saveSeller = (e) => {
    e.preventDefault()
    sellersRef.add({ ...seller, uid: user.uid }).then(() => {
      alert('Información de vendedor actualizada!')
    })
  }

  return (
    <Container>
      <h1>Ingresa tu información para vender tus productos</h1>
      <p>Información de vendedor</p>
      <form onSubmit={saveSeller}>
        <p>Nombre</p>
        <input
          value={seller.name}
          onChange={(e) => setSeller((old) => {
            return ({
              ...old, name: e.target.value
            })
          })}
          placeholder="Nombre de vendedor o tienda"
        />
        <div />
        <p>Dirección</p>
        <input
          value={seller.direccion}
          onChange={(e) => setSeller((old) => {
            return ({
              ...old, direccion: e.target.value
            })
          })}
          placeholder="Ubicación"
        />
        <div />
        <button type="submit">Guardar Información</button>
      </form>
    </Container>
  )
}

export default Seller
