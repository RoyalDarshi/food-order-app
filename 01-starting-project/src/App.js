import Header from "./components/Layout/Header";
import { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [shownCart, setShownCart] = useState(false);
  const showCartHandler=()=>{
    setShownCart(true);
  }
  const hideCartHandler = () => {
    setShownCart(false);
  };
  return (
    <CartProvider>
      {shownCart&&<Cart onClose={hideCartHandler} />}
      <Header onOpen={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
