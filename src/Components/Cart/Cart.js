import classes from './Cart.module.css'

import Modal from '../UI/Modal'

const Cart=(props)=>{

    const cartItems=<ul className={classes['cart-items']}>{[
        {id:'1',name:'Biriyani',Quantity:1,
        price:'200'}].map((item)=>(<li>{item.name}</li>))}</ul>

    return (
    <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>200</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
    )
}

export default Cart