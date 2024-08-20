import React from "react";
import { Link } from "react-router-dom";

export default function UploadProductBtn() {
  return (
    <Link
      to="/manage/new"
      className="flex self-center bg-blue-500 border border-transparent text-white px-6 py-1 cursor-pointer text-md ml-auto"
    >
      상품추가
    </Link>
  );
}
