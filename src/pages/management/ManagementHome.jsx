import React, { useEffect, useState } from "react";
import ManagementTitle from "../../components/management/main/shared/ManagementTitle";
import Example from "./Example";

export default function ManagementHome() {
  return (
    <div className="flex flex-col border border-red-500 min-w-[1080px]">
      <ManagementTitle text="New Product & New User" />
      <div className="flex justify-center items-center w-full h-[340px] rounded-md bg-white  border-gray-300 border shadow-md">
        <Example />
      </div>
      <div className="flex gap-4">
        <div className="w-1/2 bg-white rounded-md shadow-md mt-2">
          <ul className="flex">
            <li>Name</li>
            <li>Price</li>
            <li>Category</li>
          </ul>
          <ul>
            <li>
              <div>Man's Clothing1</div>
              <div>100</div>
              <div>Man</div>
            </li>
            <li>
              <div>Man's Clothing1</div>
              <div>100</div>
              <div>Man</div>
            </li>
            <li>
              <div>Man's Clothing1</div>
              <div>100</div>
              <div>Man</div>
            </li>
          </ul>
        </div>

        <div>신규 상품</div>
      </div>
    </div>
  );
}
