import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function GoAddPageButton({ url }) {
  return (
    <Link
      to={url}
      className="flex self-center items-center px-4 py-2 ml-auto gap-1
   bg-blue-500 text-white rounded-md cursor-pointer text-md font-bold
   hover:bg-blue-600"
    >
      <FaPlus className="" />
      Add
    </Link>
  );
}
