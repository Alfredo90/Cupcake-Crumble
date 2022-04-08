import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js/Navbar";
import Main from "./components/Main.js/Main";
import BillingForm from "./components/Checkout.js/BillingForm";
import Auth from "./components/Auth.js/Auth";
import Cart from "./components/Cart.js/Cart";
import Menu from "./components/Menu.js/Menu";
import Checkout from "./components/Checkout.js/Checkout";



const App = () => {
 
  return (
    <div className="App-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/billingForm" element={<BillingForm/>}/>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;
     

