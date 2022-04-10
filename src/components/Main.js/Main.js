import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className=" w-full h-full flex flex-col justify-content align-items gap-10 ">
      <div className="bg-pic-one w-full h-675 bg-cover">
        <Link to="/menu">
          <button className="flex justify-center p-8 align-items mx-auto mt-338 text-white text-xl border-2 bg-orange-400 hover:bg-orange-300 font-proxima-nova rounded-md font-semibold  ">
            Shop Now
          </button>
        </Link>
      </div>
      <div className="bg-pic-two w-full h-675 bg-cover ">
        <h1 className="text-white">About</h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolor
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="bg-pic-three w-full h-675 bg-cover ">
      <h1 className="text-white ">Service</h1>
      <p className="text-white flex justify-center items-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolor
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};
export default Main;
