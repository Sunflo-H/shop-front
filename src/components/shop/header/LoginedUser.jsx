import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setIsLogined } from "../../../slice/authSlice";

export default function LoginedUser() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const { data: user } = useQuery({ queryKey: ["loginedUser"] });

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    queryClient.removeQueries(["loginedUser"]); // ["user"] 쿼리 캐시 무효화
    queryClient.invalidateQueries(["loginedUser"]); // 쿼리 리패칭
    dispatch(setIsLogined(false));
  };

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
        <ul className="absolute top-15 -left-0 w-44 px-4 pt-4 border border-gray-300 bg-white z-10 text-sm text-center">
          <li className="mb-4">
            <UserInfo username={user?.name} />
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
              onClick={handleLogout}
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
