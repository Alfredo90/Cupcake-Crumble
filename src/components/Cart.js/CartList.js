import { useState } from "react"
const CartList = ({cart_id, img, price, quantity, title, deleteItemFromCart, updateCupcakeQuantity, cupcake_id}) => {
  
  const [selectTagValue, setSelectTagValue] = useState(quantity)

  const quantityArr = Array.from(Array(10).keys()).map(num => ({
    key: `cupcakeQuantity:${num}`,
    optionQuantity: num + 1
  }))

  const quantityHandler = e => {
    const quantity = e.target.value

    setSelectTagValue(quantity)
    updateCupcakeQuantity(quantity, cupcake_id)
  }

  return (
    <li>
      <img src={img} alt={title} />
      <p>${price}</p>
      <input type="button" onClick={deleteItemFromCart.bind(null, cart_id)} value="Remove" />
      <div>
        <label htmlFor="quantity">Qty:</label>
        <select id="quantity"  defaultValue={selectTagValue} onChange={quantityHandler}>
          {quantityArr.map(({key, optionQuantity}) => (
            <option key={key} value={optionQuantity}>
              {optionQuantity}
            </option>
          ))}
        </select>
      </div>
    </li>
  )}
export default CartList;
