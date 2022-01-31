import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js/Navbar";
import Main from "./components/Main.js/Main";
import Auth from "./components/Auth.js/Auth";
import Cart from "./components/Cart.js/Cart";
import Menu from "./components/Menu.js/Menu"

const App = () => {
  return (
    <div className="App-container">
      <Navbar />
      {/* <Menu/> */}
      {/* <Main/> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
};

export default App;
