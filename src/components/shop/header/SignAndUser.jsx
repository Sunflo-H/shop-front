import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useAuthContext } from "../../../context/AuthContext";
import User from "./User";
import { Link } from "react-router-dom";

export default function SignAndUser() {
  const { user, login, logout } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {!user && (
        <div
          className="hidden md:block border-b-2 border-transparent hover:border-black h-full px-2 pt-5 pb-3 cursor-pointer "
          onClick={handleLogin}
        >
          Sign In
        </div>
      )}
      {user && (
        <>
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
                {user.isAdmin && (
                  <li className="mb-4">
                    <Link
                      to="/products/new"
                      className="border-b-2 border-transparent hover:border-black pb-1 cursor-pointer"
                    >
                      Upload Products
                    </Link>
                  </li>
                )}
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
                    onClick={handleLogout}
                  >
                    Sign Out
                  </span>
                </li>
              </ul>
            )}
          </div>
        </>
      )}
    </>
  );
}
