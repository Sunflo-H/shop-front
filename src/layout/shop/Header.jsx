import React, { useState } from "react";
import Nav from "../../components/shop/header/Nav";
import { RxHamburgerMenu } from "react-icons/rx";
import Cart from "../../components/shop/header/Cart";
import SideNav from "../../components/shop/header/SideNav";
import SignAndUser from "../../components/shop/header/SignAndUser";
import { GrClose } from "react-icons/gr";
import Logo from "../../components/shop/header/Logo";
import { useSelector } from "react-redux";
import SearchBar from "../../components/shop/header/SearchBar";
import SearchIcon_mobile from "../../components/shop/header/SearchIcon_mobile";
import AnimatedTextBanner from "../../components/shop/header/AnimatedTextBanner";

export default function Header() {
  const user = useSelector((state) => state.auth.user);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 border-b border-gray-300 bg-white shadow-sm">
      <AnimatedTextBanner
        text1={"2024 Fall Collection"}
        text2={"New Season, New Style"}
      />
      <div
        className="relative flex items-stretch justify-center max-w-screen-2xl m-auto 
       md:justify-between md:px-10"
      >
        <Logo />
        <Nav />
        <div className="flex items-center gap-2 font-semibold shrink-0 ">
          {user && <Cart />}
          <SearchBar />
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
