import React from "react";

export default function Page({ value, activePage, handlePageClick }) {
  return (
    <div
      className={`px-4 py-1 rounded-md cursor-pointer ${
        value == activePage ? "bg-blue-200 text-blue-500" : "hover:bg-gray-300"
      }`}
      onClick={() => handlePageClick(value)}
    >
      {value}
    </div>
  );
}
