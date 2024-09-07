import React from "react";
import ColorOptionItem from "./ColorOptionItem";

export default function ColorOption({ colorList, currentColor, onChange }) {
  return (
    <div>
      <div className="font-semibold text-gray-500 text-sm mb-2">
        {currentColor}
      </div>
      <div className="flex mb-4 gap-2 font-bold items-center">
        {colorList.map((color, i) => (
          <ColorOptionItem
            color={color}
            currentColor={currentColor}
            onChange={onChange}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
