import React from "react";

export default function ColorOptionItem({ color, selectedColor, onChange }) {
  let bg;
  switch (color) {
    case "Black":
      bg = "bg-black";
      break;
    case "Red":
      bg = "bg-red-500";
      break;
    case "Green":
      bg = "bg-green-500";
      break;
    case "Blue":
      bg = "bg-blue-500";
      break;
    case "Yellow":
      bg = "bg-yellow-500";
      break;
  }

  return (
    <>
      <input
        className="hidden"
        type="radio"
        name="color"
        value={color}
        id={color}
        required
        onChange={onChange}
      />

      <label
        className={`border p-0.5 cursor-pointer rounded-full shadow-md 
          ${color === selectedColor ? `border-black` : "border-gary-200"}`}
        htmlFor={color}
      >
        <div className={`w-5 h-5 ${bg} rounded-full `}></div>
      </label>
    </>
  );
}
