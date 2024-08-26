import React from "react";

export default function UpdateAndExitBtn() {
  return (
    <div className="flex justify-center ml-auto gap-3 mt-4 border">
      <button
        type="submit"
        className="px-6 py-2 text-white font-bold  bg-blue-600 cursor-pointer rounded-md
            hover:bg-blue-500"
      >
        Edit Details
      </button>
      <div
        className="px-6 py-2 text-white font-bold bg-gray-800 cursor-pointer rounded-md
            hover:bg-gray-700"
      >
        Exit
      </div>
    </div>
  );
}
