import React from "react";

import Logo from "../../components/ProductManagement/header/Logo";
import UploadProductBtn from "../../components/ProductManagement/header/UploadProductBtn";

export default function Header() {
  return (
    <div className="flex justify-center border-b border-gray-300 bg-white mb-4">
      <div className="w-screen max-w-screen-2xl flex px-4 py-2">
        <Logo />
        <UploadProductBtn />
      </div>
    </div>
  );
}
