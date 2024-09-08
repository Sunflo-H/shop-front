import React from "react";

export default function SizeOption({ sizeList, currentSize, onChange }) {
  return (
    <div className="flex mb-4 gap-2 font-bold items-center">
      <div className="w-24 text-lg py-2">SIZE</div>
      {sizeList.map((size, i) => (
        <OptionItem
          size={size}
          currentSize={currentSize}
          onChange={onChange}
          key={i}
        />
      ))}
    </div>
  );
}

function OptionItem({ size, currentSize, onChange }) {
  return (
    <>
      <input
        className="hidden"
        type="radio"
        name="size"
        value={size}
        id={size}
        required
        onChange={onChange}
      />
      <label
        className={`w-20 py-2 border border-gary-300 cursor-pointer text-center ${
          size === currentSize && "bg-black text-white"
        }`}
        htmlFor={size}
      >
        {size}
      </label>
    </>
  );
}
