import React,{Fragment ,useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

import Cart from "./Components/Cart/Cart";

function App() {

  const[cartIsShown,setcartIsShown]=useState(false)

  const ShowCartHandler=()=>{
    setcartIsShown(true)
  }

  const HideCartHandler=()=>{
    setcartIsShown(false)
  }

  return (
    <Fragment>
       {cartIsShown && <Cart onClose={HideCartHandler} />}
           <Header onShowCart={ShowCartHandler}/>
            <main>
              <Meals />
            </main>
    </Fragment>
  )
}

export default App;
