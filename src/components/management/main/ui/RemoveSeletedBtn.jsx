import React from "react";
import { FaTrash } from "react-icons/fa";

export default function RemoveSelectedBtn({ isSelectMode, onClick }) {
  return (
    <div
      className={` inline-flex items-center px-4 py-2 mt-3 gap-2
       bg-red-500 text-white rounded-md cursor-pointer text-md font-bold
       hover:bg-red-600 ${isSelectMode || "hidden"} `}
      onClick={onClick}
    >
      <FaTrash />
      Remove Selected
    </div>
  );
}
