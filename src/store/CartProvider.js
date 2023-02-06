import { useState } from "react"
import Cartcontext from "./cart-context"

const CartProvider=(props)=>{
    const[items,setupdateItems]=useState([])
     const addItemtoCartHandler=item=>{
        console.log('clicked id item:',item.id);

       
            setupdateItems([...items, item]);
            
       

     }

     const removeItemhandler=item=>{
     }

    const cartcontext={
        items:items,
        additem:addItemtoCartHandler,
        removeitem:removeItemhandler,
    }

    return <Cartcontext.Provider value={cartcontext}>{props.children}</Cartcontext.Provider>
}

export default CartProvider