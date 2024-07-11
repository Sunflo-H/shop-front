import React from "react";
import { useNavigate } from "react-router-dom";
import SideListItem from "../../ui/SideListItem";
import SignAndUser_Side from "./SignAndUser_Side";

export default function SideNav({ isSideNavOpen, setIsSideNavOpen }) {
  const navigate = useNavigate();
  const navItemList = [
    { title: "Home", action: () => navigate("/") },
    { title: "Men", action: () => navigate("/products/Men", { state: "Men" }) },
    {
      title: "Women",
      action: () => navigate("/products/Women", { state: "Women" }),
    },
    {
      title: "Accessories",
      action: () => navigate("/products/Accessories", { state: "Accessories" }),
    },
    {
      title: "Shoes",
      action: () => navigate("/products/Shoes", { state: "Shoes" }),
    },
    { title: "Recommend", action: () => navigate("/products/Recommend") },
  ];

  return (
    <nav
      className={`absolute w-80 h-screen top-14 left-0 z-10 bg-white border border-gray-300 transition-all md:hidden 
      ${!isSideNavOpen && "-translate-x-full"}`}
    >
      <SignAndUser_Side />
      <ul className={`flex flex-col mt-4 font-bold`}>
        {navItemList.map((navItem, i) => (
          <SideListItem
            title={navItem.title}
            onClick={navItem.action}
            setIsSideNavOpen={setIsSideNavOpen}
            key={i}
          />
        ))}
      </ul>
    </nav>
  );
}
