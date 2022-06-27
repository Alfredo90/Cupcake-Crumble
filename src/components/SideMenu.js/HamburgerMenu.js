import { ReactComponent as HamburgerIcon } from "../../assets/hamburgericon.svg";
const HamburgerMenu = ({ showSidebar }) => {
  return (
    <div className=" flex items-center justify-end my-20 mx-10 ">
      <button
        onClick={showSidebar}
      >
        <HamburgerIcon />
      </button>
    </div>
  );
};
export default HamburgerMenu;
