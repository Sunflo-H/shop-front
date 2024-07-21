import React from "react";

import Logo from "../../components/ProductManagement/header/Logo";
import UploadProductBtn from "../../components/ProductManagement/header/UploadProductBtn";
import { useLocation } from "react-router-dom";
import SaveAndCancelBtn from "../../components/ProductManagement/header/SaveAndCancelBtn";

export default function Header() {
  const location = useLocation();

  return (
    <div className="flex justify-center border-b border-gray-300 bg-white ">
      <div className="w-screen max-w-screen-2xl flex px-4 py-1 ">
        <Logo />
        {location.pathname === "/manage" ? (
          <UploadProductBtn />
        ) : (
          <SaveAndCancelBtn />
        )}
      </div>
    </div>
    // <div>
    //   <div className="bg-white h-4"></div>
    //   <div className="text-sm">홈 &gt; 상품관리 </div>
    //   <div className="text-2xl">상품 관리</div>
    // </div>
  );
}
