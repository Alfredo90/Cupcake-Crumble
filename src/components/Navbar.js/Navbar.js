import { useState } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton.js/LogoutButton";
import { useSelector } from "react-redux";
import { selectUserState } from "../../redux/slices/userSlice";
// import { ReactComponent as UserIcon } from "../../assets/userIcon.svg";
// import { ReactComponent as CartIcon } from "../../assets/cartIcon.svg";
import HamburgerMenu  from "../SideMenu.js/HamburgerMenu";
import SideMenu from "../SideMenu.js/SideMenu";

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const { isUserLoggedIn, user } = useSelector(selectUserState);

  const handleClick = (e) => {
    const el = document.getElementById(`${e.target.id}-section`);
    el.scrollIntoView({ behavior: "smooth" });
  };
  const showSidebar = () => setIsSidebar(!isSidebar);

  return (
    <nav className="relative flex items-center justify-between w-100vw h-full  lg:h-56 lg:w-full sm:w-full md:w-full   ">
      <h1 className="  italic font-semibold text-teal-600 font-lily lg:text-4xl p-10 sm:text-2xl">
        <Link to="/">Cupcake Crumble</Link>
      </h1>
      <div className="w-100vw h-full absolute lg:invisible sm:visible ">
        {isSidebar ? (
          <SideMenu showSidebar={showSidebar} /> 
     ): ( 
          <HamburgerMenu showSidebar={showSidebar} />
      
     )}</div>

      <ul className="flex items-center p-10  text-lg font-medium gap-30 font-proxima-nova invisible sm:invisible md:invisible lg:visible ">
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
          {/* <CartIcon /> */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-18 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </Link>
        <Link to={"/auth"} className="hover:text-green-500">
          {!isUserLoggedIn ? (
            // <UserIcon />
          <svg xmlns="http://www.w3.org/2000/svg" class="h-18 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>

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

