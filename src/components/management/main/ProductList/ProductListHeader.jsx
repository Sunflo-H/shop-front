import React from "react";

export default function ProductListHeader() {
  return (
    <div className="flex py-2 border-b border-gray-300 font-bold bg-blue-100 ">
      <div className="w-20 flex justify-center items-center">
        <input type="checkbox" />
      </div>
      <div className="w-60 text-lg text-blue-900">Name</div>
      <div className="w-40 text-lg text-blue-900">Price</div>
      <div className="w-40 text-lg text-blue-900">Category</div>
      <div className="w-40 text-lg text-blue-900">Status</div>
      <div className="w-40 text-lg text-blue-900">Registration Date</div>
      {/* <div className="w-60 text-center border border-red-500">Name</div>
      <div className="w-28 text-center border border-red-500">Price</div>
      <div className="w-40 text-center border border-red-500">Category</div>
      <div className="w-40 text-center border border-red-500">Status</div>
      <div className="w-40 text-center border border-red-500">
        Registration Date
      </div> */}
    </div>
  );
}
