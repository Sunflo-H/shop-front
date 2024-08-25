import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { setIsRemoveMode } from "../../../slice/management/productManagementSlice";

export default function RemoveSelectedBtn() {
  const { isSelectMode } = useSelector((state) => state.productManagement);
  // console.log("isSelectMode :", isSelectMode);
  return (
    <div
      className={` inline-flex items-center px-4 py-2 mt-3 gap-2
       bg-red-500 text-white rounded-md cursor-pointer text-md font-bold
       hover:bg-red-600 ${isSelectMode || "hidden"} `}
    >
      <FaTrash />
      Remove Selected
    </div>
  );
}
