import React, { useEffect, useState } from "react";
import InputFormTitle from "../../management/main/ui/InputFormTitle";
import { useDispatch, useSelector } from "react-redux";
import { setNewUser, setProgress } from "../../../slice/userRegisterSlice";
import { Link, useNavigate } from "react-router-dom";
import { alert_registerError } from "../../../alerts/error";

export default function Register_password() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { newUser } = useSelector((state) => state.userRegister);
  const { password } = newUser;
  const [confirmPwd, setConfirmPwd] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setNewUser({ ...newUser, [name]: value }));
  };

  console.log(password === confirmPwd);
  const handleNextClick = () => {
    if (!password) {
      alert_registerError("Password is empty");
      return;
    }
    password === confirmPwd
      ? navigate("/register/info")
      : alert_registerError("Passwords do not match");
  };

  useEffect(() => {
    dispatch(setProgress({ email: true, password: false, info: false }));
  }, []);

  return (
    <>
      <div className="py-4 px-4 h-44">
        <InputFormTitle title="Password" />
        <div className="grow text-start mt-1">
          <input
            type="password"
            name="password"
            className="w-full outline-none border  rounded-md px-2 py-2 mr-2 focus:border-gray-400 "
            placeholder="ex) password1234!@"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-4">
          <InputFormTitle title="Confirm Password" />
          <input
            type="password"
            className="w-full outline-none border  rounded-md px-2 py-2 mr-2 focus:border-gray-400 "
            placeholder="Confirm Password"
            value={confirmPwd}
            onChange={(e) => setConfirmPwd(e.target.value)}
          />
        </div>
      </div>
      <div className="px-4">
        <div
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black cursor-pointer"
          onClick={handleNextClick}
        >
          Next
        </div>
      </div>
    </>
  );
}
