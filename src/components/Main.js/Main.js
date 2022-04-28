import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className=" w-full h-full flex flex-col justify-content align-items gap-10 bg-no-repeat ">
      <div className="bg-pic-one w-full h-500 bg-cover bg-center">
        <Link to="/menu">
          <button className="flex justify-center p-8 align-items mx-auto mt-250 text-white text-xl border-2 bg-orange-500 hover:bg-orange-400 font-proxima-nova rounded-md font-semibold">
            Shop Now
          </button>
        </Link>
      </div>
      <section
        id="about-section"
        className=" bg-pic-two w-full h-500 bg-cover flex flex-col  bg-no-repeat"
      >
        <h1 className="text-green-600 text-40 justify-center  items-center mx-auto my-20 font-lily font-semibold "> About</h1>
        <p className=" font-proxima-nova font-medium italic text-white text-center justify-center items-center mx-auto text-24 mt-10 tracking-wide leading-relaxed w-half h-half">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolor
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section
        id="service-section"
        className="bg-pic-three w-full h-500 bg-cover flex flex-col bg-no-repeat  "
      >
        <h1 className="text-orange-500 text-40 justify-center items-center mx-auto my-20 font-lily font-semibold ">Service</h1>
        <p className="font-proxima-nova font-medium italic text-white text-center justify-center items-center mx-auto text-24 mt-10 tracking-wide leading-relaxed w-half h-half ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolor
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>
  );
};
export default Main;
