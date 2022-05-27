// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton.js/LogoutButton";
import { useSelector } from "react-redux";
import { selectUserState } from "../../redux/slices/userSlice";
import { ReactComponent as UserIcon } from "../../assets/userIcon.svg";
import { ReactComponent as CartIcon } from "../../assets/cartIcon.svg";

const Navbar = () => {
  const { isUserLoggedIn, user } = useSelector(selectUserState);

  const handleClick = (e) => {
    const el = document.getElementById(`${e.target.id}-section`);
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="relative flex items-center justify-between p-6 border-2 ">
      <h1 className="pl-20 italic font-semibold text-teal-600 font-lily text-36 ">
        <Link to="/">Cupcake Crumble</Link>
      </h1>

      <ul className="flex items-center pr-20 text-lg font-medium gap-30 font-proxima-nova ">
        <li>
          <Link to="/menu" className="hover:text-sky-600">
            Menu
          </Link>
        </li>
        <li className="hover:text-orange-600">
          <button id="about" onClick={handleClick} className="font-medium">
            About
          </button>
        </li>
        <li className="hover:text-indigo-600">
          <button id="service" onClick={handleClick} className="font-medium">
            Service
          </button>
        </li>
        <Link to="/cart" className="hover:text-rose-600">
          <CartIcon />
        </Link>
        <Link to={"/auth"} className="hover:text-green-500">
          {!isUserLoggedIn ? (
            <UserIcon />
          ) : (
            <div className="group relative dropdown cursor-pointer font-medium tracking-wide">
              <p className="hover:text-green-500">{user.username}</p>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="top-0 w-50 bg-white shadow px-6 py-8">
                  <li className="block text-rose-500">
                    <LogoutButton />
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

