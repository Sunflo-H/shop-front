import React from "react";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function ProductListItem({ product }) {
  const { name, price, category, status, createdAt } = product;

  return (
    <li className="flex py-2 border-b border-dashed	">
      <div className="w-20  flex justify-center items-center">
        <input type="checkbox" />
      </div>
      <div className="w-60 pl-[2px] ">{name}</div>
      <div className="w-40 pl-[2px] ">{price}</div>
      <div className="w-40 pl-[2px] ">{category}</div>
      <div className="w-40 pl-[2px] ">{status}</div>
      <div className="w-40 pl-[2px] ">{createdAt}</div>
      <div className="w-40 flex justify-center items-center gap-5">
        <FaPen className="cursor-pointer text-deepblue hover:text-blue-500" />
        <FaTrash className="cursor-pointer text-deepblue hover:text-blue-500" />
      </div>
      {/* <div className="w-60 text-center">{name}</div>
      <div className="w-28 text-center">{price}</div>
      <div className="w-40 text-center">{category}</div>
      <div className="w-40 text-center">{status}</div>
      <div className="w-40 text-center">{createdAt}</div>
      <div className="w-40 flex justify-center items-center gap-4">
        <FaPen className="cursor-pointer text-deepblue hover:text-blue-500" />
        <FaTrash className="cursor-pointer text-deepblue hover:text-blue-500" />
      </div> */}
    </li>
  );
}
