import { Link } from "react-router-dom";
import { ReactComponent as UserIcon } from "../../assets/userIcon.svg";
import { ReactComponent as CartIcon } from "../../assets/cartIcon.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center shadow  p-6 relative">
      <h1 className="font-lily text-36 text-green-400 pl-20 ">
        <Link to="/">Cupcake Crumble</Link>
      </h1>
      <div>
        <ul className="flex items-center gap-30 font-proxima-nova pr-20">
          <Link to="/menu">
            <li>Menu</li>
          </Link>
          <li>About</li>
          <li>Service</li>
          <Link to="/cart">
            <CartIcon />
          </Link>
          <Link to="/auth">
            <UserIcon />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
