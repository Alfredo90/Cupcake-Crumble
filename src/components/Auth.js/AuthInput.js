import { useSelector } from "react-redux";
import { selectIsNewUser } from "../../redux/slices/userSlice";

const AuthInput = ({
  inputData: { label, type, name, placeholder },
  userInfo,
  setUserInfo,
}) => {
  const isNewUser = useSelector(selectIsNewUser);
  const isNewPassword = isNewUser ? "new" : "current";
  const nameFixed = name ? name : type;
  const autoComplete = name === "password" ? `${isNewPassword}-password` : nameFixed;

  const onChangeHandler = (e) => {
    setUserInfo((prevState) => ({ ...prevState, [nameFixed]: e.target.value }));
  };

  return (
    <label>
      {label}
      <input 
        className="flex flex-col items-center justify-center p-10 "
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
