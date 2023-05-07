import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    const order = {
        buyer: {
            name: 'Mariela',
            email: 'Mariela@gmail.com',
            phone: '123456789',
            address: 'asdasd'
    },
    items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
}
    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))

    }
    if (cart.length === 0) {
        return (
            <>
                <p>No hay productos en el carrito</p>
                <Link to='/'>Hacer Compras</Link>
            </>
        )
    }
  return (
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
        }

        <p>
            total: {totalPrice()}
        </p>
        <button onClick={handleClick}>Emitir Compra</button>
        </>
  )
}

export default Cart;