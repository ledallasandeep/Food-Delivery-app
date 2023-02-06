import React,{useContext} from 'react'

import classes from './Cart.module.css'
import Cartcontext from '../../store/cart-context'
import Modal from '../UI/Modal'

const Cart=(props)=>{

    const cartcntx=useContext(Cartcontext)

    const cartItems=<ul className={classes['cart-items']}>
        {cartcntx.items.map((item)=>
        (<li key={item.id} id = {item.id}>Name:{item.name}, Price:{item.price},Quantity:{item.quantity}</li>))}</ul>

    return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>200</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
    )
}

export default Cart