import React from "react";

export default function Page({ page, currentPage, handlePageClick }) {
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
