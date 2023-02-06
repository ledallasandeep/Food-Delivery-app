import React from 'react'

const Cartcontext=React.createContext({
    items:[],
    additem:(item)=>{},
    removeitem:(id)=>{}
})

export default Cartcontext