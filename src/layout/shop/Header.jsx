import React, { useState } from "react";
import Nav from "../../components/shop/header/Nav";
import { RxHamburgerMenu } from "react-icons/rx";
import Cart from "../../components/shop/header/Cart";
import SideNav from "../../components/shop/header/SideNav";
import SignAndUser from "../../components/shop/header/SignAndUser";
import { GrClose } from "react-icons/gr";
import Logo from "../../components/shop/header/Logo";
import { useSelector } from "react-redux";

export default function Header() {
  const user = useSelector((state) => state.auth.user);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <header className="fixed w-full border-b border-gray-300 mb-10 z-50 bg-white">
      <div className="relative flex items-center justify-center md:justify-between max-w-screen-2xl m-auto md:px-10">
        <Logo />
        <Nav />
        <div className="flex items-center gap-2 font-semibold shrink-0 ">
          {user && <Cart />}
          <SignAndUser />
        </div>

        {/* 너비가 작아졌을때 */}

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
      </div>
    </header>
  );
}
