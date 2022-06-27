import SideBarData from "./SideBarData";
import SideBarList from "./SideBarList";
import { ReactComponent as CloseIcon } from "../../assets/closeicon.svg";

const SideMenu = ({ showSidebar }) => {
  return (
    <div className="  bg-gray-700/95 w-100vw h-100vh  m-auto ">
      <div className="flex items-center justify-end ">
        <button className="my-20 mx-10 " onClick={showSidebar}>
          <CloseIcon />
        </button>
      </div>

      <section className=" flex flex-col items-center  translate-x-0 ease-in-out duration-150 ">
        {SideBarData.map((item, index) => (
          <SideBarList key={index} item={item} />
        ))}
      </section>
    </div>
  );
};

export default SideMenu;
