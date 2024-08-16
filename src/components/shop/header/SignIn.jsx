import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import User from "./User";
import { Link } from "react-router-dom";
import { login, logout } from "../../../api/firebase_auth";
import { useSelector } from "react-redux";

export default function SignIn() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.auth.user) ?? {}; // user 데이터를 가지고 오기 전이라면 {}

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Link
      to="login"
      className="hidden md:block border-b-2 border-transparent hover:border-black h-full px-2 pt-5 pb-3 cursor-pointer "
      onClick={handleLogin}
    >
      Sign In
    </Link>
  );
}
