import React, { useState, useEffect } from 'react'
import { auth, firestore } from '../../Services/FirebaseConnection'
import { useHistory } from 'react-router-dom'
import './cart.css'

const Cart = () => {
    const [order, setOrder] = useState([]);
    const response = firestore.collection('order')
    const history = useHistory();

    const updateCart = async () => {
        const data = await response.get()
        data.docs.forEach((doc) => {
            if (doc.data().orderedBy === auth.currentUser.email) {
                setOrder((oldArray) => [...oldArray, doc])
            }
        });
    };

    useEffect(() => {
        updateCart();
    }, []);

    const cancelOrder = (toDel) => {
        //Se borra la orden de la coleccion 'order'
        response
            .doc(toDel.id)
            .delete()
            .then(() => {
                setOrder(order.filter(element => (element.id !== toDel.id)));
                alert("Order deleted successfully.");
            })
            .catch((error) => {
                console.error("Error removing order: ", error);
            });
    };

    const goBack = () =>{
        history.push('/home');
    }

    return (
        <>
            <div className="Cart-navbar row">
                <button className="col-2 Cart-backButton" onClick={() => goBack()}>Regresar</button>
            </div>
            <div className="mainCart">
                
                <div className="row tableHeader">
                    <h4 className="col-4">Producto</h4>
                    <h4 className="col-4">Precio</h4>
                    <h4 className="col-4">Local</h4>
                </div>
                <div className="separatorOne"></div>
                <div className="cartList">
                    <div className="cartProducts">
                        {order.map((item, index) => {
                            return (
                                <div
                                    key={`${item.data().orderedBy} + ${item.id} + ${index} + ${order.length
                                        }`}
                                    className="cartProduct margin-zero"
                                >
                                    <div className="row align-items-center prodInfo">
                                        <h2 className="col-4 prodTitleCart align-self-center margin-zero padding-zero">
                                            {item.data().itemName}
                                        </h2>
                                        <p className="col-4 prodQtyCart align-self-center margin-zero padding-zero">{`Q. ${item.data().itemPrice
                                            }`}</p>
                                        <h2 className="col-4 prodPriceCart align-self-center margin-zero padding-zero">{`${item.data().seller
                                            }`}</h2>
                                    </div>
                                    <button
                                        className="justify-content-center align-items-center cartDelete margin-zero"
                                        onClick={() => cancelOrder(item)}>
                                        Eliminar</button>
                                </div>
                            );
                        })}
                    </div>
                    <div className="separatorTwo"></div>
                </div>
            </div>
        </>
    )
}

export default Cart;
