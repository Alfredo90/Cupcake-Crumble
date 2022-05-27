import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/userSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <div>
      <button type="button" onClick={logoutUser}>
        <Link to="/">Logout</Link>
      </button>
    </div>
  );
};

export default LogoutButton;
