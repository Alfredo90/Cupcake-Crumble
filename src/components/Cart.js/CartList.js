const CartList = ({item: {img, price, quantity, title}}) => (
  <li>
    <img src={img} alt={title} />
    <p>${price}</p>
  </li>
)

export default CartList
