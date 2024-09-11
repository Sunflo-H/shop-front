import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function Quantity({ quantity, setQuantity }) {
  return (
    <div className="my-2 mt-4">
      <div className="text-xs font-bold">QTY</div>
      <div className="flex items-center text-sm gap-4 mt-3">
        <FiMinus
          className="cursor-pointer"
          onClick={() =>
            setQuantity((prev) => {
              if (prev === 1) return 1;
              return prev - 1;
            })
          }
        />
        {quantity}
        <FiPlus
          className="cursor-pointer"
          onClick={() => setQuantity((prev) => prev + 1)}
        />
      </div>
    </div>
  );
}
