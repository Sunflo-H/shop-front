import React from "react";

import Logo from "../../components/ProductManagement/header/Logo";
import UploadProductBtn from "../../components/ProductManagement/header/UploadProductBtn";
import { useLocation } from "react-router-dom";
import SaveAndCancelBtn from "../../components/ProductManagement/header/SaveAndCancelBtn";
import NavList from "../../components/ProductManagement/header/NavList";

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
