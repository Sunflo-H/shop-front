import React, { useState } from "react";
import NavItem from "../../components/management/nav/NavItem";
import { BiLogOut } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const navItem = ["Home", "Products", "Users"];

// function getNav(pathname) {
//   const basePath = "/manage";
//   const path = pathname.substring(basePath.length);
//   let nav = "";
//   if (!path) nav = "Home";
//   else nav = path.substring(1) + "s";
//   return capitalizeFirstLetter(nav);
// }

// // 첫글자 대문자로 변환
// function capitalizeFirstLetter(str) {
//   if (str.length === 0) return str; // 빈 문자열 처리
//   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// }

export default function Nav() {
  // const location = useLocation();
  // const [activePage, setActivePage] = useState(getNav(location.pathname));

  return (
    // 높이 고정인 nav
    <nav className="fixed flex flex-col min-w-[240px] max-h-[699px] h-full rounded-md mx-6 mb-4 bg-white shadow-md">
      <ul className="mt-2 flex-1">
        {navItem.map((item, index) => (
          <NavItem
            item={item}
            // activePage={activePage}
            // setActivePage={setActivePage}
            key={index}
          />
        ))}
      </ul>
      <Link
        to="/"
        className="flex items-center mx-4 px-6 py-3 mb-8 gap-4
      font-bold rounded-lg 
      hover:bg-blue-500 hover:text-white "
      >
        <BiLogOut className="text-[26px]" />
        Sign out
      </Link>
    </nav>
  );
}
