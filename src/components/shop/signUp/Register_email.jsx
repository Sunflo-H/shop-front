import React, { useEffect } from "react";
import InputFormTitle from "../../management/main/ui/InputFormTitle";
import { useDispatch, useSelector } from "react-redux";
import { setNewUser, setProgress } from "../../../slice/userRegisterSlice";
import { useNavigate } from "react-router-dom";
import { alert_registerError } from "../../../alerts/error";
import axios from "axios";

export default function Register_email() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { newUser } = useSelector((state) => state.userRegister);
  const { email } = newUser;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setNewUser({ ...newUser, [name]: value }));
  };

  const handleNextClick = async () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = (email) => emailRegex.test(email);
    console.log(email);
    // 이메일이 형식에 맞는지 체크 -> 이메일이 중복인지 체크
    if (!isValidEmail(email))
      alert_registerError("Please enter a valid email address");
    else {
      try {
        const { data } = getUserByEmail(email);
        data.length > 0
          ? alert_registerError("This email address is already in use.")
          : navigate("/register/password");
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    dispatch(setProgress({ email: false, password: false, info: false }));
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center px-4 h-44">
        <InputFormTitle title="Enter your email" />
        <div className="flex text-start mt-1">
          <input
            type="text"
            name="email"
            className="manage-font w-full outline-none border rounded-md px-2 py-2 focus:border-gray-400 "
            placeholder="example@adonis.com"
            value={email}
            onChange={handleInputChange}
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
