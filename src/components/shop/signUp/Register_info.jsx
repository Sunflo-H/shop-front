import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetNewUser,
  setNewUser,
  setProgress,
} from "../../../slice/userRegisterSlice";
import InputFormTitle from "../../management/main/ui/InputFormTitle";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { alert_registerSuccess } from "../../../alerts/success";
import { alert_registerError } from "../../../alerts/error";
import { registerUser_user } from "../../../api/userApi";

export default function Register_info() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { newUser } = useSelector((state) => state.userRegister);
  const { name, phone } = newUser;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setNewUser({ ...newUser, [name]: value }));
  };

  const handleNextClick = async () => {
    try {
      console.log(newUser);
      registerUser_user(newUser);
      alert_registerSuccess().then(() => {
        navigate("/");
        dispatch(resetNewUser());
      });
    } catch (err) {
      alert_registerError("Do not register");
    }
  };

  useEffect(() => {
    dispatch(setProgress({ email: true, password: true, info: false }));
  }, []);
  return (
    <>
      <div className="py-4 px-4 h-44">
        <InputFormTitle title="Name" />
        <div className="grow text-start mt-1">
          <input
            type="text"
            name="name"
            className="w-full outline-none border  rounded-md px-2 py-2 mr-2 focus:border-gray-400 "
            placeholder="Hong Gil Dong"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-4">
          <InputFormTitle title="Phone number" />
          <input
            type="text"
            name="phone"
            className="w-full outline-none border  rounded-md px-2 py-2 mr-2 focus:border-gray-400 "
            placeholder="010-1234-5678"
            value={phone}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="px-4">
        <Link
          to={"/register/info"}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          onClick={handleNextClick}
        >
          Submit
        </Link>
      </div>
    </>
  );
}

{
  /* <div className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="sr-only">
            Confirm Password
          </label>
          <input
            id="confirm-password"
            name="confirm-password"
            type="password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black rounded-b-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          onClick={(e) => handleSubmit(e)}
        >
          Sign up
        </button>
      </div>
    </div> */
}
