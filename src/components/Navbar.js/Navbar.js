import { Link } from "react-router-dom";
import { ReactComponent as UserIcon } from "../../assets/userIcon.svg";
import { ReactComponent as CartIcon } from "../../assets/cartIcon.svg";

const Navbar = () => {

  
  return (
    <div className="flex justify-between items-center border-2 ">
      <h1 className="font-lily text-48  text-teal-600  italic font-bold pl-20 ">
        <Link to="/">Cupcake Crumble</Link>
      </h1>
      <div>
        <ul className="flex items-center gap-30 font-proxima-nova pr-20  text-lg font-medium  ">
          <Link to="/menu" className="hover:text-sky-600">
            <li>Menu</li>
          </Link>
          <li className="hover:text-orange-600">About</li>
          <li className="hover:text-indigo-600">Service</li>
          <Link to="/cart" className="hover:text-rose-600">
            <CartIcon />
          </Link>
          <Link to="/auth" className="hover:text-green-500">
            <UserIcon />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
