import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import User from "./User";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../slice/authSlice";

export default function SignAndUser() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.auth.user) ?? "";

  return (
    <>
      {!user && (
        <Link
          to="login"
          className="hidden md:block border-b-2 border-transparent hover:border-black h-full px-2 pt-5 pb-3 cursor-pointer "
        >
          Sign In
        </Link>
      )}
      {user && (
        <div
          className="relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div
            className={`hidden md:flex items-center border-b-2  pl-2 pt-5 pb-3 cursor-pointer 
            ${isOpen ? "border-black" : "border-transparent"}`}
          >
            My Account <MdArrowDropDown className="text-2xl" />
          </div>
          {isOpen && (
            <ul className="absolute top-15 -left-14 w-44 px-4 pt-4 border border-gray-300 bg-white z-10 text-sm text-center">
              <li className="mb-4">
                <User user={user} />
              </li>
              <li className="mb-4 ">
                <Link
                  to="/favorites"
                  className="border-b-2 border-transparent hover:border-black pb-1 cursor-pointer"
                >
                  My Favorites
                </Link>
              </li>
              <li className="mb-4">
                <span
                  className="border-b-2 border-transparent hover:border-black pb-1 cursor-pointer"
                  onClick={() => dispatch(logout())}
                >
                  Sign Out
                </span>
              </li>
            </ul>
          )}
        </div>
      )}
    </>
  );
}
