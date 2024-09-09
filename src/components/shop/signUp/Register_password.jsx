import React, { useEffect } from "react";
import InputFormTitle from "../../management/main/ui/InputFormTitle";
import { useDispatch, useSelector } from "react-redux";
import { setNewUser, setProgress } from "../../../slice/userRegisterSlice";
import { Link } from "react-router-dom";

export default function Register_password() {
  const dispatch = useDispatch();

  const { newUser, progress } = useSelector((state) => state.userRegister);
  const { password } = newUser;

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    dispatch(setNewUser({ ...newUser, [name]: value }));
  };

  const handleNextClick = () => {
    dispatch(setProgress({ ...progress, password: true }));
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
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mt-4">
          <InputFormTitle title="Confirm Password" />
          <input
            name="confirmPassword"
            type="password"
            className="w-full outline-none border  rounded-md px-2 py-2 mr-2 focus:border-gray-400 "
            placeholder="Confirm Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </div>
      <div className="px-4">
        <Link
          to={"/register/info"}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          onClick={handleNextClick}
        >
          Next
        </Link>
      </div>
    </>
  );
}
