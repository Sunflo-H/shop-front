import React, { useState } from "react";
import NavItem from "../../components/ProductManagement/nav/NavItem";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Nav() {
  const navItem = ["홈", "상품 관리", "고객 관리"];
  const [activePage, setActivePage] = useState("상품 관리");

  return (
    // 높이 동적인 nav
    // <nav className="flex flex-col  min-w-[240px]  rounded-xl mx-6 mb-4 bg-white shadow-md">
    //   <ul className="mt-10 flex-1">
    //     {navItem.map((item) => (
    //       <NavItem
    //         item={item}
    //         activePage={activePage}
    //         setActivePage={setActivePage}
    //       />
    //     ))}
    //   </ul>
    //   <div
    //     className="flex items-center mx-4 px-6 py-3 mb-8 gap-4
    //   font-bold rounded-lg border-blue-200 border-2 cursor-pointer
    //   hover:bg-blue-500 hover:text-white hover:border-transparent"
    //   >
    //     <BiLogOut className="text-[26px]" />
    //     로그아웃
    //   </div>
    // </nav>

    // 높이 고정인 nav
    <nav className="flex flex-col min-w-[240px] max-h-[646px] rounded-xl mx-6 mb-4 bg-white shadow-md">
      <ul className="mt-10 flex-1">
        {navItem.map((item) => (
          <NavItem
            item={item}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        ))}
      </ul>
      <Link
        to="/"
        className="flex items-center mx-4 px-6 py-3 mb-8 gap-4
      font-bold rounded-lg border-blue-200 border-2 cursor-pointer 
      hover:bg-blue-500 hover:text-white hover:border-transparent"
      >
        <BiLogOut className="text-[26px]" />
        로그아웃
      </Link>
    </nav>
  );
}
