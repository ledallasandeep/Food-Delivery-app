import React,{useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

  const[cartIsShown,setcartIsShown]=useState(false)

  const ShowCartHandler=(props)=>{
    setcartIsShown(true)
  }

  const HideCartHandler=()=>{
    setcartIsShown(false)
  }

  return (
    <CartProvider>
       {cartIsShown && <Cart onClose={HideCartHandler} />}
           <Header onShowCart={ShowCartHandler}/>
            <main>
              <Meals />
            </main>
    </CartProvider>
  )
}

export default App;
