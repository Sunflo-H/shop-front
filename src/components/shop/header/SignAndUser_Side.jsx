import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";
import SideListItem from "../../ui/SideListItem";

export default function SignAndUser_Side() {
  const { user, login, logout } = useAuthContext();
  const navigate = useNavigate();
  const optionList = user?.isAdmin
    ? [
        { title: "Upload Products", action: () => navigate("/products/new") },
        { title: "My Favorites", action: () => navigate("/products/favorite") },
        { title: "Sign Out", action: () => logout() },
      ]
    : [
        { title: "My Favorites", action: () => navigate("/favorites") },
        { title: "Sign Out", action: () => logout() },
      ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 로그아웃 상태일때 */}
      {!user && (
        <div
          className=" px-2 py-3 text-center border-b border-gray-300"
          onClick={() => login()}
        >
          <p className="w-full bg-black text-white text-sm font-bold py-2 cursor-pointer ">
            SIGN IN
          </p>
        </div>
      )}

      {/* 로그인 상태일때 */}
      {user && (
        <>
          <div
            className={`flex items-center justify-between px-6 py-5 bg-gray-100 font-bold border-gray-300 border-b
              ${isOpen && "border-dashed"}`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <p>My Account</p>
            {isOpen ? <BiMinus /> : <BsPlusLg />}
          </div>

          {/* Account Open */}
          <ul
            className={`relative bg-gray-100 pt-4 border-b border-gray-300 text-sm font-bold ${
              !isOpen && "hidden"
            }`}
          >
            <div className="flex items-center gap-4 ml-5 mb-4">
              <img className="w-10 h-10 rounded-full" src={user.photoURL}></img>
              <span className="text-lg">{user.displayName}</span>
            </div>
            {optionList.map((option, i) => (
              <SideListItem
                title={option.title}
                onClick={option.action}
                key={i}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
}
