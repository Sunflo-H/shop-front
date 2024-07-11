import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAuthContext } from "../../../context/AuthContext";
import Cart from "./Cart";
import SideNav from "./SideNav";
import SignAndUser from "./SignAndUser";
import { GrClose } from "react-icons/gr";

export default function Navbar() {
  const { user } = useAuthContext();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <header className="fixed w-full border-b border-gray-300 mb-10 z-50 bg-white">
      <div className="relative flex items-center justify-center md:justify-between max-w-screen-2xl m-auto md:px-10">
        <Link
          to="/"
          className="flex items-center text-3xl md:mr-6 xl:mr-20 pt-2 pb-3 md:pb-2 cursor-pointer"
        >
          <h1>Adonis</h1>
        </Link>
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
