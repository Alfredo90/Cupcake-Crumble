
const MenuCard = ({ cupcake: {cupcake_id, img, title, description, price }, addToCart }) => {
  const addToCartHandler = () => addToCart(cupcake_id);
  return (
    <li className="flex flex-col items-center justify-center m-20 mx-auto bg-gray-300  w-384 h-400 rounded-xl">
      <img
        src={img}
        alt={title}
        className="flex items-center justify-center rounded-full w-200 h-200 "
      />
      <div className="flex flex-col my-auto">
        <div className="flex items-center justify-between mx-20 ">
          <h2>{title}</h2>
          <p>${price}</p>
        </div>
        <p className="p-10 tracking-tighter">{description}</p>
        <div className="flex items-center justify-end">
          <button type="button" onClick={addToCartHandler} >Add To Cart</button>
        </div>
      </div>
    </li>
  );
};

export default MenuCard;
