import React from "react";
import { Link } from "react-router-dom";

export default function UpdateAndExitBtn({ id }) {
  return (
    <div className="flex justify-center ml-auto gap-3 mt-4 ">
      <Link
        to={`/manage/product/update/${id}`}
        type="submit"
        className="px-6 py-2 text-white font-bold  bg-blue-600 cursor-pointer rounded-md
            hover:bg-blue-500"
      >
        Edit Product
      </Link>
      <div
        className="px-6 py-2 text-white font-bold bg-gray-800 cursor-pointer rounded-md
            hover:bg-gray-700"
      >
        Exit
      </div>
    </div>
  );
}
