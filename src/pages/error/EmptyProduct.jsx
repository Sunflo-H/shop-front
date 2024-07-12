import React from "react";
import { BiError } from "react-icons/bi";

export default function EmptyProduct() {
  return (
    <div className="h-96 flex items-center justify-center">
      <div>
        <BiError className="text-8xl text-gray-300 m-auto" />
        <div className="font-bold text-2xl">
          Sorry, you have no product to this page.
        </div>
      </div>
    </div>
  );
}
