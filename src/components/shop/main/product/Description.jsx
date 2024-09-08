import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function Description({ description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`text-sm  border-b border-gray-400 overflow-hidden transition-all duration-700 delay-0 ${
        isOpen ? "max-h-[500px]" : "max-h-[40px]"
      }`}
    >
      <div
        className="flex items-center justify-between h-[40px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Product Information
        {isOpen ? <FiMinus /> : <FiPlus />}
      </div>
      <div className="h-full text-xs mt-2 mb-3">
        <div className="font-bold ">[ Description ]</div>
        <div className="pt-[2px] pb-2 font-semibold">{description} </div>
        <div className="font-bold">[ Material ]</div>
        <div className="pt-[2px] pb-2 font-semibold">• Cow Leather+Nylon </div>
        <div className="font-bold ">[ Country of Origin ]</div>
        <div className="pt-[2px] pb-2 font-semibold">• Made in China </div>
      </div>
    </div>
  );
}
