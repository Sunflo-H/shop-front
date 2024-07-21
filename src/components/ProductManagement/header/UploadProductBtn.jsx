import React from "react";
import { Link } from "react-router-dom";

export default function UploadProductBtn() {
  return (
    <Link
      to="/manage/new"
      className="ml-auto bg-blue-500 text-white p-2 cursor-pointer"
    >
      Upload Product
    </Link>
  );
}
