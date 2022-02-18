import { useState, useEffect } from "react";
import CartList from "./CartList";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("/cart")
      .then(({ data }) => setCart(data))
      .catch(console.error);
  }, []);

  const deleteItemFromCart = cartItemId => {
    // console.log(cupcakeId)
    axios
    .delete(`/cart/${cartItemId}`)
    .then((res) => {
      setCart(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <ul className="flex flex-row flex-wrap ">
      {cart.map( props => (
        <CartList 
        key={props.cart_id} 
        {...props}
        deleteItemFromCart={deleteItemFromCart}
         />
      ))}
    </ul>
  );
};

export default Cart;
