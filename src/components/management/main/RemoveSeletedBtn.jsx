import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

export default function RemoveSelectedBtn() {
  return (
    <Link
      to="/manage/new"
      className="flex self-center items-center px-4 py-2 gap-1
       bg-red-500 text-white rounded-md cursor-pointer text-md font-bold
       hover:bg-red-600"
    >
      <FaTrash />
      Remove
    </Link>
  );
}
