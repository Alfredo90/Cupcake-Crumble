import { useState, useEffect } from "react";
import axios from "axios";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const cartEmpty = cart.length === 0;

  //Making api request to retrieve data for Cart
  useEffect(() => {
    axios
      .get("/cart")
      .then(({ data }) => setCart(data))
      .catch(console.error);
  }, [setCart]);
  //Making api request to update or add item to Cart
  const updateCupcakeQuantity = (cartId, quantity) => {
    console.log(cartId)
    axios
      .put(`/cart/${cartId}`, { quantity })
      .then((res) => setCart(res.data))
      .catch(console.error);
  };
  //Making api request to delete item from Cart
  const deleteItemFromCart = (cartId) => {
    axios
      .delete(`/cart/${cartId}`)
      .then((res) => setCart(res.data))
      .catch(console.error);
  };

  //Mapping state and passing props to CartItem component
  // passing update and delete function through props to the CartItem component
  //when user clicks on checkout button, it will redirect them to the Billing form page.
  return (
    <>
      {cartEmpty ? (
        <EmptyCart />
      ) : (
        <ul className="flex flex-col flex-wrap border-2">
          {cart?.map((props) => ( 
            <CartItem
              key={props.cart_id}
              deleteItemFromCart={deleteItemFromCart}
              updateCupcakeQuantity={updateCupcakeQuantity}
              {...props}
            />
          ))}
          <Link to="/billingForm">Checkout</Link>
        </ul>
      )}
    </>
  );
};

export default Cart;
