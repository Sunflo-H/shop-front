import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

export default function NavItem({ item, activePage, setActivePage }) {
  return (
    <li
      className={`flex items-center mx-4 px-6 py-3 my-2 font-bold gap-4 rounded-lg
        ${item === activePage && "bg-blue-400 text-white"}`}
      onClick={() => setActivePage(item)}
    >
      {item === "상품 관리" ? (
        <FiShoppingBag className="text-[26px]" />
      ) : (
        <FaRegUser className="text-[26px]" />
      )}
      {item}
    </li>
  );
}
