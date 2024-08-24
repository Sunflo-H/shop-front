import React from "react";

export default function CategoryFilter() {
  return (
    <div className="">
      <select
        className="px-4 py-2 font-bold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        // onChange={handleChange}
      >
        <option value="ALL">전체 상품</option>
        <option value="Man">남성</option>
        <option value="Woman">여성</option>
        <option value="Shoese">신발</option>
        <option value="Accessary">악세사리</option>
      </select>
    </div>
  );
}
