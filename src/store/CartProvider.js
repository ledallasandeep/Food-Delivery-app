import { useState } from "react"
import Cartcontext from "./cart-context"

const CartProvider=(props)=>{
    const[items,setupdateItems]=useState([])
     const addItemtoCartHandler=item=>{
        const existingItems = [...items];
        console.log('clicked id item:',item.id);
        const itemIdx = existingItems.findIndex((i) => i.id === item.id);

        if (itemIdx !== -1) {
            existingItems[itemIdx].quantity = Number(existingItems[itemIdx].quantity)+1;
            setupdateItems(existingItems)
            console.log("already exists");
           
          } else {
              setupdateItems([...items, item]);
            }
       
        console.log('Quantity :', item.quantity );
        // setItems([...items, item])
        // // items.push(item);

       
           
            
       

     }

     const removeItemhandler=item=>{
        setupdateItems(items.filter(c => c.id !== item.id))
     }

    const cartcontext={
        items:items,
        additem:addItemtoCartHandler,
        removeitem:removeItemhandler,
    }

    return <Cartcontext.Provider value={cartcontext}>{props.children}</Cartcontext.Provider>
}

export default CartProvider