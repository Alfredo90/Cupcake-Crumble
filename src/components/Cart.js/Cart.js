import { useState, useEffect } from "react";
import CartList from "./CartList";
import axios from "axios";


const Cart = () => {
  const [cart, setCart] = useState([]);
 
  
  useEffect(() => {
    axios
      .get("/cart")
      .then(({ data }) => {
        console.log(data)
        setCart(data)
      })
      .catch(console.error);
  }, []);

  const updateCupcakeQuantity = (quantity, cupcakeId ) => {
    axios
      .put(`/cart/${cupcakeId}`, {quantity})
      .then(({data}) => {
        console.log(data)
        setCart(data)
      })
      .catch((err) => {
        console.log(err);
      });
    }

  const deleteItemFromCart = cartItemId => {
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
        updateCupcakeQuantity={updateCupcakeQuantity}
         />
      ))}
    </ul>
  );
};

export default Cart;
