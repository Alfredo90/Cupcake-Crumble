import { ReactComponent as HamburgerIcon } from "../../assets/hamburgericon.svg";
const HamburgerMenu = ({ showSidebar }) => {
  return (
    <div className=" fixed w-100vw h-100vh items-center p-10 ">
      <button
        className="w-full flex items-center justify-end"
        onClick={showSidebar}
      >
        <HamburgerIcon />
      </button>
    </div>
  );
};
export default HamburgerMenu;
