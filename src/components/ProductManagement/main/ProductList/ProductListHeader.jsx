import React from "react";

export default function ProductListHeader() {
  return (
    <div className="flex px-8 py-2 border-b border-gray-300 font-bold ">
      <div className="w-20">
        <input type="checkbox" />
      </div>
      <div className="w-72 text-center">Name</div>
      <div className="w-28 text-center">Price</div>
      <div className="w-40 text-center">Category</div>
      <div className="w-40 text-center">Status</div>
      <div className="w-40 text-center">Registration Date</div>
    </div>
  );
}
