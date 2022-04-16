import { useState } from 'react'
import { ReactComponent as DeleteIcon }from '../../assets/deleteIcon.svg'

//Destructuring props in CartItem component
const CartItem = ({cart_id, img, price, quantity, title, deleteItemFromCart, updateCupcakeQuantity}) => {
  const [selectTagValue, setSelectTagValue] = useState(quantity)
  //array.from creates a new, shallow-copied Array instance from an array-like or iterable object.
  //array.keys method returns a new Array Iterator object that contains the keys for each index in the array.
  //A dynamic way of making an array of keys for my quantity .
  const quantityArr = Array.from(Array(10).keys()).map(num => ({
    key: `cupcakeQuantity:${num}`,
    optionQuantity: num + 1
  }))
//function that handles the quantity of the items in the cart
  const quantityHandler = (e) => {
    const quantity = e.target.value;

    setSelectTagValue(quantity);
    updateCupcakeQuantity(cart_id, quantity);
  };
  return (
    <li className='border w-300 h-300 rounded-md my-4'>
      <img src={img} alt={title} className="w-200 h-200" />
      <p>${price * quantity}</p>
      <button type="button" onClick={deleteItemFromCart.bind(null, cart_id)} value="Remove" > <DeleteIcon/></button>
      <div>
        <label htmlFor="quantity">Qty:</label>
        <select id="quantity" defaultValue={selectTagValue} onChange={quantityHandler}>
          {quantityArr.map(({key, optionQuantity}) => (
            <option key={key} value={optionQuantity}>
              {optionQuantity}
            </option>
          ))}
        </select>
      </div>
    </li>
  )
}

export default CartItem
