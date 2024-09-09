import React, { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../slice/authSlice";

export default function User() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth) ?? "";
  function logout() {
    localStorage.removeItem("jwt");
    dispatch(setUser(""));
  }
  return (
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
            <UserInfo username={user.name} />
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
              onClick={() => logout()}
            >
              Sign Out
            </span>
          </li>
        </ul>
      )}
    </div>
  );
}

function UserInfo({ username, isSide }) {
  if (isSide) {
    return (
      <div className="h-20 w-40 bg-red-500">
        <span className="shrink-0">{username}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <span className="text-lg">{username}</span>
    </div>
  );
}
