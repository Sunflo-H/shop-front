import React from "react";

export default function ProductListHeader() {
  return (
    <div className="flex py-2 border-b border-gray-300 font-bold bg-blue-100 ">
      <div className="w-20 flex justify-center items-center ">
        <label
          class="relative flex items-center rounded-full cursor-pointer"
          htmlFor="checkbox"
        >
          <input
            type="checkbox"
            class="peer relative h-4 w-4 cursor-pointer appearance-none rounded border-2 border-blue-400 bg-white checked:border-blue-400 checked:bg-blue-400 "
            id="checkbox"
          />
          <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
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
