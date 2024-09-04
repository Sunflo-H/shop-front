import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FiPackage } from "react-icons/fi";

export default function NavItem({ item }) {
  const location = useLocation();
  const activeNav = getNav(location.pathname);

  return (
    <Link
      to={getUrl(item)}
      className={`flex items-center mx-4 px-6 py-2 my-2 font-bold gap-4 rounded-lg cursor-pointer 
        ${
          item === activeNav ? "bg-blue-500 text-white " : "hover:bg-blue-100"
        }`}
    >
      {getIcon(item)}
      {item}
    </Link>
  );
}

function getNav(pathname) {
  const basePath = "/manage";
  const path = pathname.substring(basePath.length);
  let nav = "";
  if (!path) nav = "Home";
  else nav = path.substring(1) + "s";
  return capitalizeFirstLetter(nav);
}

// 첫글자 대문자로 변환
function capitalizeFirstLetter(str) {
  if (str.length === 0) return str; // 빈 문자열 처리
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function getIcon(navItem) {
  let icon = "";
  if (navItem === "Home") icon = AiOutlineHome;
  else if (navItem === "Products") icon = FiPackage;
  else icon = FaRegUser;

  return React.createElement(icon, { className: "text-[26px]" });
}

function getUrl(navItem) {
  let url = "";
  if (navItem === "Home") url = "/manage";
  else if (navItem === "Products") url = "/manage/product";
  else url = "/manage/user";

  return url;
}
