// import { ReactComponent as AddCartIcon } from "../../assets/addcarticon.svg";
const MenuCard = ({ cupcake: {cupcake_id, img, title, description, price }, addToCart }) => {
  const addToCartHandler = () => addToCart(cupcake_id);
  return (
    <li className="flex flex-col  m-20 w-400 h-420 rounded-xl border-2  shadow-xl">
      <div className="flex justify-center items-center m-10 ">
        <img
          src={img}
          alt={title}
          className="rounded-full w-192 h-192 border-2 "
        />
      </div>
      <div className=" flex justify-between items-center mx-2.5 text-18 ">
        <h2 className=" font-medium text-xl italic font-lily text-amber-600">
          {title}
        </h2>
        <p className="text-teal-600 text-xl font-bold ">${price}</p>
      </div>
      <div className="flex justify-center items-stretch font-medium h-200  text-left mx-5 pt-20 ">
        <p>{description}</p>
      </div>
      <div className="flex items-center justify-end ">
        <button type="button" onClick={addToCartHandler}>
          {/* <AddCartIcon /> */}
          <svg class="w-38 h-38 text-teal-500 hover:text-teal-600" fill="currentcolor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </li>
  );
};

export default MenuCard;
          
