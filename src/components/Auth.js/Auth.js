import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthInput from "./AuthInput";
import {
  selectIsNewUser,
  changeIsNewUser,
  login,
  logout,
} from "../../redux/slices/userSlice";

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
  const logoutUser = () => {
    dispatch(logout());
  };

  return (

      <div className="items-center justify-center flex flex-row h-100vh w-100wh mx-0 ">
        <fieldset className="border p-3 w-300 h-300 flex flex-col justify-center items-center bg-green  ">
          <legend>{isNewUser ? "Signup" : "Login"}</legend>
          <form onSubmit={submitHandler}>
            {inputsToMap.map((inputData) => (
              <AuthInput
                key={`authInput:${inputData.type}`}
                inputData={inputData}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            ))}
            <div>
              <input
                type="button"
                value={ isNewUser ? "Already have an account?" : "Need an account?" }
                onClick={toggleIsNewUser}
                className="bg-green"
              />
              <button type="submit">{isNewUser ? "Signup" : "Login"}</button>
              <button type="button" onClick={logoutUser}>
                <Link to="/">Logout</Link>
              </button>
            </div>
          </form>
        </fieldset>
      </div>
   
  );
};

export default Auth;
