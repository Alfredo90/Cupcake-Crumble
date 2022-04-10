import { useSelector } from "react-redux";
import { selectIsNewUser } from "../../redux/slices/userSlice";

const AuthInput = ({ inputData: { label, type, name, placeholder },userInfo,setUserInfo,}) => {
  const isNewUser = useSelector(selectIsNewUser);
  const isNewPassword = isNewUser ? "new" : "current";
  const nameFixed = name ? name : type;
  const autoComplete = name === "password" ? `${isNewPassword}-password` : nameFixed;

  const onChangeHandler = (e) => {
    setUserInfo((prevState) => ({ ...prevState, [nameFixed]: e.target.value }));
  };

  return (
    <label className=" flex flex-col font-medium text-lg">
      {label}
      <input 
        className="rounded-lg  text-lg  p-10 border-2 hover:border-black "
        type={type}
        name={nameFixed}
        placeholder={placeholder ? placeholder : type}
        value={userInfo[nameFixed]}
        onChange={onChangeHandler}
        autoComplete={autoComplete}
        aria-required
        required
      />
    </label>
  );
};

export default AuthInput;
