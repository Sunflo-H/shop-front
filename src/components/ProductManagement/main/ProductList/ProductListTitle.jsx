import React from "react";

export default function ProductListTitle() {
  return (
    <div className="flex px-8 py-2 border-b border-gray-300 font-bold">
      <div className="w-20">
        <input type="checkbox" /> No
      </div>
      <div className="w-72 text-center">Title</div>
      <div className="w-28 text-center">Price</div>
      <div className="w-40 text-center">Category</div>
      <div className="w-40 text-center">Status</div>
      {/* <div className="w-16  text-center mr-4">Stock</div> */}
      <div className="w-40 text-center">Registration Date</div>
      {/* <div className="w-40 text-center">Update Date</div> */}
    </div>
  );
}
