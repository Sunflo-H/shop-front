import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default function UploadProductBtn() {
  return (
    <Link
      to="/manage/new"
      className="flex self-center items-center px-4 py-2 ml-auto gap-1
       bg-blue-900 text-white rounded-md cursor-pointer text-md font-bold
       hover:bg-blue-800"
    >
      <FaPlus className="" />
      상품 추가
    </Link>
  );
}
