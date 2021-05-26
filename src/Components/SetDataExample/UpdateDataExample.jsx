import React from 'react'
import firebase from 'firebase/app'
import { firestore } from '../../Services/FirebaseConnection'

const UpdateDataExample = ({ id }) => {
  const productsRef = firestore.collection('products').doc(id)

  const increasePrice = () => {
    productsRef.update({
      price: firebase.firestore.FieldValue.increment(1)
    })
  }

  const decreasePrice = () => {
    productsRef.update({
      price: firebase.firestore.FieldValue.increment(-1)
    })
  }

  return (
    <div>
      <button onClick={increasePrice}>subir precio zanahoria</button>
      <button onClick={decreasePrice}>bajar precio zanahoria</button>
    </div>
  )
}

export default UpdateDataExample
