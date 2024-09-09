import React from "react";
import ColorOptionItem from "./ColorOptionItem";

export default function ColorOption({ colorList, selectedColor, onChange }) {
  return (
    <div>
      <div className="font-semibold text-gray-500 text-sm mb-2">
        {selectedColor}
      </div>
      <div className="flex mb-4 gap-2 font-bold items-center">
        {colorList.map((color, i) => (
          <ColorOptionItem
            color={color}
            selectedColor={selectedColor}
            onChange={onChange}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
