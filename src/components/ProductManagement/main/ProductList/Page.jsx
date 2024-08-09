import React from "react";
import { setCurrentPage } from "../../../../slice/productsManagement/pageNationSlice";
import { useDispatch } from "react-redux";

export default function Page({ page, currentPage }) {
  const dispatch = useDispatch();

  const handlePageClick = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div
      className={`px-4 py-1 rounded-md cursor-pointer ${
        page == currentPage ? "bg-blue-200 text-blue-500" : "hover:bg-gray-300"
      }`}
      onClick={() => handlePageClick(page)}
    >
      {page}
    </div>
  );
}
