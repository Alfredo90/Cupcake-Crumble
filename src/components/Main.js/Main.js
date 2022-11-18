import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="  w-full h-full flex flex-col justify-content align-items gap-10  ">
      <section className="bg-pic-one w-full h-500 bg-cover bg-no-repeat bg-center contrast-90 rounded-sm ">
        <Link to="/menu">
          <button className="flex justify-center p-5 align-items mx-auto mt-250 text-white text-lg border-2 bg-orange-600 hover:bg-orange-500 font-proxima-nova rounded-md font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Shop Now
          </button>
        </Link>
      </section>
      <section
        id="about-section"
        className=" bg-pic-two w-full h-500 bg-cover flex flex-col  bg-no-repeat  contrast-75 rounded-sm "
      >
        <h1 className="text-green-600 text-40 justify-center items-center mx-auto my-20 font-lily font-semibold ">
          About
        </h1>
        <p className=" font-proxima-nova font-medium italic text-white text-center justify-center items-center mx-auto sm:text-12 lg:text-24 mt-10 lg:tracking-wide lg:leading-relaxed lg:w-half lg:h-half sm:h-full sm:w-half ">
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
        className="bg-pic-three w-full h-500 bg-cover flex flex-col bg-no-repeat rounded-sm  "
      >
        <h1 className="text-orange-500 text-40 justify-center items-center mx-auto my-20 font-lily font-semibold ">
          Service
        </h1>
        <p className="font-proxima-nova font-medium italic text-white text-center justify-center items-center mx-auto sm:text-12 lg:text-24 mt-10 lg:tracking-wide lg:leading-relaxed lg:w-half lg:h-half sm:h-full sm:w-full  ">
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
