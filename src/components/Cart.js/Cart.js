import { useState, useEffect } from "react";
import axios from "axios";
import CartItem from "./CartItem";
import {Link} from "react-router-dom"

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("/cart")
      .then(({ data }) => setCart(data))
      .catch(console.error);
  }, []);

  const updateCupcakeQuantity = (cartId, quantity) => {
    axios
      .put(`/cart/${cartId}`, { quantity })
      .then((res) => setCart(res.data))
      .catch(console.error);
  };

  const deleteItemFromCart = (cartId) => {
    axios
      .delete(`/cart/${cartId}`)
      .then((res) => setCart(res.data))
      .catch(console.error);
  };

  return (
    <ul className=" flex flex-col flex-wrap ">
      {cart.map((props) => (
        <CartItem
          key={props.cart_id}
          deleteItemFromCart={deleteItemFromCart}
          updateCupcakeQuantity={updateCupcakeQuantity}
          {...props}
        />
      ))}
      <Link to="/checkout"><button>Checkout</button></Link>
    </ul>
  );
};

export default Cart;
