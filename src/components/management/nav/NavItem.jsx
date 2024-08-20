import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

export default function NavItem({ item, activePage, setActivePage }) {
  return (
    <Link
      to={getUrl(item)}
      className={`flex items-center mx-4 px-6 py-3 my-2 font-bold gap-4 rounded-lg cursor-pointer
        ${item === activePage && "bg-blue-400 text-white"}`}
      onClick={() => setActivePage(item)}
    >
      {getIcon(item)}
      {item}
    </Link>
  );
}

function getIcon(navItem) {
  let icon = "";
  if (navItem === "홈") icon = AiOutlineHome;
  else if (navItem === "상품 관리") icon = FiShoppingBag;
  else icon = FaRegUser;

  return React.createElement(icon, { className: "text-[26px]" });
}

function getUrl(navItem) {
  let url = "";
  if (navItem === "홈") url = "/manage";
  else if (navItem === "상품 관리") url = "/manage/product/";
  else url = "/manage/user";

  return url;
}
