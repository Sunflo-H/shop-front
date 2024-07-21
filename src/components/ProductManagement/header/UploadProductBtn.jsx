import React from "react";
import { Link } from "react-router-dom";

export default function UploadProductBtn() {
  return (
    <Link
      to="/manage/new"
      className=" bg-blue-500 text-white px-2 py-1 cursor-pointer text-md ml-auto"
    >
      상품추가
    </Link>
  );
}
