import React from "react";

import Logo from "../../components/management/header/Logo";
import UploadProductBtn from "../../components/management/header/UploadProductBtn";
import { useLocation } from "react-router-dom";
import SaveAndCancelBtn from "../../components/management/header/SaveAndCancelBtn";
import NavList from "../../components/management/header/NavList";

export default function Header() {
  const location = useLocation();

  return (
    <div className="flex justify-center border-b border-gray-300 bg-white ">
      <div className="w-screen max-w-screen-2xl flex h-[50px] ">
        <Logo />
        {/* <NavList /> */}

        {location.pathname === "/manage" ? (
          <UploadProductBtn />
        ) : (
          <SaveAndCancelBtn />
        )}
      </div>
    </div>
  );
}
