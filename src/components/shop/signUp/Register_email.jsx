import React, { useEffect } from "react";
import InputFormTitle from "../../management/main/ui/InputFormTitle";
import { useDispatch, useSelector } from "react-redux";
import { setNewUser, setProgress } from "../../../slice/userRegisterSlice";
import { Link } from "react-router-dom";

export default function Register_email() {
  const dispatch = useDispatch();

  const { newUser, progress } = useSelector((state) => state.userRegister);
  const { email } = newUser;

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    dispatch(setNewUser({ ...newUser, [name]: value }));
  };

  const handleNextClick = () => {
    dispatch(setProgress({ ...progress, email: true }));
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
            onChange={handleEmailChange}
          />
        </div>
      </div>
      <div className="px-4">
        <Link
          to={"/register/password"}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          onClick={handleNextClick}
        >
          Next
        </Link>
      </div>
    </>
  );
}
