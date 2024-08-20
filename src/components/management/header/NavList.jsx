import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

export default function NavList() {
  const navItem = ["Product", "User"];
  const [activeNav, setActiveNav] = useState("Product");

  const handleClick = (item) => {
    setActiveNav(item);
  };
  return (
    <div className="absolute flex left-1/2 -translate-x-1/2 gap-2">
      {navItem.map((item, index) => (
        <div
          className={`flex self-center py-2 px-4 my-1 rounded-md text-xl  ${
            item === activeNav
              ? "text-blue-500 border-2 border-blue-500"
              : "text-gray-500 border-2 border-transparent"
          }`}
          onClick={() => handleClick(item)}
          key={index}
        >
          {item === "Product" ? <FiShoppingBag /> : <FaRegUser />}
        </div>
      ))}
    </div>
  );
}
