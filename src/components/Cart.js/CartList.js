const CartList = ({ cart_id ,img, price, quantity, title , deleteItemFromCart }) => {

  return (
  <li>
    <img src={img} alt={title} />
    <p>${price}</p>
    <button type ="button"onClick={deleteItemFromCart.bind(null,cart_id)}>Remove</button>
  </li>
  )
}

export default CartList
