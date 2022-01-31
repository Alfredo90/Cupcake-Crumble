import { useState, useEffect } from "react";
import CartList from "./CartList";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/cart")
      .then(({ data }) => setCart(data))
      .catch(console.error);
  }, []);

  return (
    <ul className="flex flex-row flex-wrap ">
      {cart.map((item) => (
        <CartList key={item.cart_id} item={item} />
      ))}
    </ul>
  );
};

export default Cart;
