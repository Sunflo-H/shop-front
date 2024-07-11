import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const handleAddProductClick = () => {
    navigate("/products/new");
  };
  return (
    <div className="flex justify-center border-b border-gray-300 bg-white mb-4">
      <div className="w-screen max-w-screen-2xl flex px-4 py-2">
        <div className="flex self-center top-1/2 text-xl font-bold ml-4">
          Product Management
        </div>
        <div
          className="ml-auto bg-blue-500 text-white p-2 cursor-pointer"
          onClick={handleAddProductClick}
        >
          Upload Product
        </div>
      </div>
    </div>
  );
}
