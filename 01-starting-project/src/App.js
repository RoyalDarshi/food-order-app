import Header from "./components/Layout/Header";
import { Fragment,useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [shownCart, setShownCart] = useState(false);
  const showCartHandler=()=>{
    setShownCart(true);
  }
  const hideCartHandler = () => {
    setShownCart(false);
  };
  return (
    <Fragment>
      {shownCart&&<Cart onClose={hideCartHandler} />}
      <Header onOpen={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
