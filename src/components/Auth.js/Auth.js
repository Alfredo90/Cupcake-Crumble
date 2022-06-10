import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AuthInput from "./AuthInput";
import { selectIsNewUser, changeIsNewUser, login } from "../../redux/slices/userSlice";

const Auth = () => {
  const isNewUser = useSelector(selectIsNewUser);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const inputsArr = [
    { label: "Username", type: "text", name: "username", placeholder: "username" },
    { label: "Email ", type: "email", placeholder: "youremail@email.com" },
    { label: "Password", type: "password" },
  ];
  const inputsToMap = isNewUser ? inputsArr : inputsArr.splice(1, 2);

  const toggleIsNewUser = () => dispatch(changeIsNewUser());

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(userInfo));
    setUserInfo({ username: "", email: "", password: "" });
  };

  return (

      <div className="items-center justify-center flex flex-row  h-100vh w-100wh mx-auto  ">
        <fieldset className="sm:w-400 sm:h-400 rounded-2xl lg:p-3 sm:p-10 lg:w-600 lg:h-600 flex flex-col justify-center items-center shadow-2xl shadow-gray-500/50 border border-gray-200    ">
          <legend className="text-black font-medium lg:text-30 sm:text-xl  font-proxima-nova ">{isNewUser ? "Signup" : "Login"}</legend>
          <form onSubmit={submitHandler}>
            {inputsToMap.map((inputData) => (
              <AuthInput
                key={`authInput:${inputData.type}`}
                inputData={inputData}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            ))}
            <div className="flex justify-between items-center my-30  ">
              <input
                type="button"
                value={ isNewUser ? "Already have an account?" : "Need an account?" }
                onClick={toggleIsNewUser}
                className=" font-medium hover:text-orange-600 cursor-pointer"
              />
              <button 
              type="submit"
              className=" font-medium text-white bg-teal-600  hover:bg-teal-700 px-10 py-4 rounded-sm "
              >{isNewUser ? "Signup" : "Login"}</button>
            </div>
          </form>
        </fieldset>
      </div>
  );
};

export default Auth;
   
