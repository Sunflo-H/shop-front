import React, { useState } from "react";
import Nav from "../../components/shop/header/Nav";
import { RxHamburgerMenu } from "react-icons/rx";
import Cart from "../../components/shop/header/Cart";
import SideNav from "../../components/shop/header/SideNav";
import SignAndUser from "../../components/shop/header/SignAndUser";
import { GrClose } from "react-icons/gr";
import Logo from "../../components/shop/header/Logo";
import { useSelector } from "react-redux";
import SearchIcon from "../../components/shop/header/SearchIcon";
import SearchIcon_mobile from "../../components/shop/header/SearchIcon_mobile";

export default function Header() {
  const user = useSelector((state) => state.auth.user);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <header className="fixed w-full mb-10 z-50 shadow-sm bg-white ">
      <div className="relative flex items-center justify-center md:justify-between max-w-screen-2xl m-auto md:px-10">
        <Logo />
        <Nav />
        <div className="flex items-center gap-2 font-semibold shrink-0 ">
          {user && <Cart />}
          <SearchIcon />
          <SignAndUser />
        </div>

        {/* 모바일 버전 */}
        {/* 햄버거 */}
        {isSideNavOpen ? (
          <GrClose
            className="md:hidden absolute left-5 shrink-0 text-3xl cursor-pointer"
            onClick={() => setIsSideNavOpen((prev) => !prev)}
          />
        ) : (
          <RxHamburgerMenu
            className="md:hidden absolute left-5 shrink-0 text-3xl cursor-pointer"
            onClick={() => setIsSideNavOpen((prev) => !prev)}
          />
        )}

        <SideNav
          isSideNavOpen={isSideNavOpen}
          setIsSideNavOpen={setIsSideNavOpen}
        />
        <SearchIcon_mobile />
      </div>
    </header>
  );
}
