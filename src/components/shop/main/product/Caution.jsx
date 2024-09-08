import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

import { FiMinus } from "react-icons/fi";

export default function Caution({ title, subTitle, info }) {
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
        {title}
        {isOpen ? <FiMinus /> : <FiPlus />}
      </div>
      <div className="h-full text-xs mt-2 mb-3">
        <div className="font-bold mb-1">{subTitle}</div>

        {info.map((item) => (
          <div className="py-1 font-semibold">• {item}</div>
        ))}
      </div>
    </div>
  );
}
