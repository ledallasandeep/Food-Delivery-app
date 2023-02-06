import { useContext } from "react"

import Cartcontext from "../../store/cart-context"

import CartIcon from "../Cart/CartIcon"

import classes from './HeaderCartButton.module.css'

const HeaderCartButton=(props)=>{    

    const cartctx=useContext(Cartcontext)
    let quantity=0
    cartctx.items.forEach(item=>{
        quantity=quantity+Number(item.quantity)
    })

    // const numberofcartitems=cartctx.items.reduce((curNumber,item)=>{
    //     return curNumber+item.amount},0)

    return(
        <button className={classes.button} onClick={props.onClickk}> 
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            {/* <span>{cartctx.message}</span> */}
            <span className={classes.badge}>{quantity}</span>
           
        </button>
    )
}

export default HeaderCartButton