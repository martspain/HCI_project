import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from '../../Services/FirebaseConnection'
import UpdateDataExample from '../SetDataExample/UpdateDataExample'

const GetDataExample = () => {
  const productsRef = firestore.collection('products')
  const queryOrderCategoria = productsRef.orderBy('categoria').limit(25)
  const [products] = useCollectionData(queryOrderCategoria, { idField: 'id' })

  return (
    <div>
      {
        products && products.map(product => (
          <div key={product.id}>
            <p>{`${product.id}: ${product.title}, ${product.price}x${product.priceUnit}, etc`}</p>
            <UpdateDataExample id={product.id} />
          </div>
        ))
      }
    </div>
  )
}

export default GetDataExample
