import SideBarData from "./SideBarData";
import SideBarList from "./SideBarList";
import { ReactComponent as CloseIcon } from "../../assets/closeicon.svg";

const SideMenu = ({ showSidebar }) => {
  return (
    <div className=" fixed  bg-gray-400 w-100vw h-100vh p-10 items-center  ">
      <button
        className="w-full flex items-center justify-end "
        onClick={showSidebar}
      >
        <CloseIcon />
      </button>

      <section className=" flex flex-col justify-center items-center ">
        {SideBarData.map((item, index) => (
          <SideBarList key={index} item={item} />
        ))}
      </section>
    </div>
  );
};

export default SideMenu;
