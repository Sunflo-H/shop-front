import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function ProductListHeader() {
  return (
    <div className="flex py-2 border-b border-gray-300 font-bold bg-blue-100 ">
      <div className="w-20 flex justify-center items-center">
        <label
          className="relative flex items-center rounded-full cursor-pointer"
          htmlFor="checkbox"
        >
          <input
            type="checkbox"
            className={`peer relative h-4 w-4 cursor-pointer appearance-none rounded border-2 border-blue-400 bg-white checked:border-blue-400 checked:bg-blue-400 `}
            id="checkbox"
          />
          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
      </div>
      <div className="w-60 text-blue-900 uppercase">Name</div>
      <div className="w-40 text-blue-900 uppercase">Price</div>
      <div className="w-40 text-blue-900 uppercase">Category</div>
      <div className="w-40 text-blue-900 uppercase">Status</div>
      <div className="w-40 text-blue-900 uppercase">Creation Date</div>
    </div>
  );
}