import { ReactComponent as AddCartIcon } from "../../assets/addcarticon.svg";
const MenuCard = ({ cupcake: {cupcake_id, img, title, description, price }, addToCart }) => {
  const addToCartHandler = () => addToCart(cupcake_id);
  return (
    <li className="flex flex-col  m-20 w-400 h-420 rounded-xl border-2 shadow">
      <div className="flex justify-center items-center m-10 ">
        <img src={img} alt={title} className="rounded-full w-192 h-192 " />
      </div>
        <div className=" flex justify-between items-center mx-2.5 text-18 ">
          <h2 className=" font-medium text-xl italic font-lily">{title}</h2>
          <p className="text-green-600 text-xl font-bold ">${price}</p>
        </div>
        <div className="flex justify-center items-stretch font-medium h-200 text-left mx-2.5  pt-20 ">
          <p>{description}</p>
        </div>
        <div className="flex items-center justify-end  ">
          <button
            type="button"
            onClick={addToCartHandler}
          >
            <AddCartIcon/>
          </button>
        </div>
    </li>
  );
};

export default MenuCard;
          
