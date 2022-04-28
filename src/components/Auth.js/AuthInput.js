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
        className="placeholder:italic placeholder:text-slate-400 block border-2 border-slate-300 rounded-lg p-6 shadow-sm focus:outline-none focus:border-teal-600 focus:ring-teal-600 focus:ring-1 text-lg"
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
