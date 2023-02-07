import React,{useState,useContext} from 'react'

import classes from './Cart.module.css'
import Cartcontext from '../../store/cart-context'
import Modal from '../UI/Modal'

const Cart=(props)=>{
    let [quantity, setQuantity] = useState(1)

    const cartcntx=useContext(Cartcontext)
    const existingItems = [...cartcntx.items]
    
    let amt = 0;

    cartcntx.items.forEach(item => {
      amt =amt+ Number((item.price)*(item.quantity));
    })
  
  const amountt='RS.'+amt

  const addQnty = (item) => {
      console.log('item added', item);
      
      const itemIdx = existingItems.findIndex((i) => i.id === item.id);
      console.log("item id",existingItems[itemIdx].quantity);
      const updatedList= existingItems[itemIdx].quantity++;
      setQuantity(updatedList);
      console.log("updated: ", updatedList);
      console.log('quantity of food in cart',item.quantity);
   
  }
  const removeAddedItem = (item) => {
    
      console.log('removing item' , item); 
      console.log( 'item id is: ',document.getElementById(item.id));
      const itemIdx = existingItems.findIndex((i) => i.id === item.id);
      if(item.quantity > 0){           
        console.log("item quantity",existingItems[itemIdx].quantity);
        const updatedList= existingItems[itemIdx].quantity--;
        setQuantity(updatedList);
    
        console.log("deleted: ", updatedList);
        }
      if(existingItems[itemIdx].quantity === 0){
    //    document.getElementById(item.id).remove();
      
        cartcntx.removeitem(item);
      }
    }
       
    // {cartcntx.items.map((item)=> 
    //     (<li key={item.id} id = {item.id}>Name:{item.name}, Price:{item.price},
    //     Quantity:{item.quantity}</li>))}
    //         </ul>
     
    const cartItems=<ul className={classes['cart-items']}>
        {/* {
        cartcntx.items.map((item) => <li style= {{fontFamily:'cursive', fontSize:'20px'}}>
             {item.name} Qnty: {item.quantity} </li>)} */}

        
        {cartcntx.items.map((item) =>(<li className={classes.cartList} key={item.id} id = {item.id}>
            <div >
              <h2 className={classes['item-name']}> {item.name}</h2> 
    
              <div className= {classes['order-qnty']}>
                <span>
                  {`RS.${item.price}`}
    
                </span>
                <span style = {{border:'1px solid black'}} >  {`x ${item.quantity}`} </span>
    
              </div>
            </div>

            <div className={classes.cartListBtn}>
              <button className={classes['btn-primary']} onClick= {() => addQnty(item)}> + </button>
              {/* <button className='btn-primary' onClick= {addcartItem}> + </button> */}
              <button className={classes['btn-primary']}onClick = {() => removeAddedItem(item)} disabled = {item.quantity === 0 }> - </button>
            </div>

              </li>))
}

        </ul> 


    return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{amountt}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
    )
}

export default Cart