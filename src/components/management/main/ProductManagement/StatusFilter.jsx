import React from "react";

export default function StatusFilter() {
  return (
    <div className="">
      <select
        className="px-4 py-2 font-bold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        // onChange={handleChange}
      >
        <option value="ALL">전체 상태</option>
        <option value="Sale">판매중</option>
        <option value="Sold Out">품절</option>
        <option value="Hide">숨김</option>
      </select>
    </div>
  );
}
