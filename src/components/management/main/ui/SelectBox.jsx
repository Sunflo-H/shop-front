import React from "react";

export default function SelectBox({ options, value, name, onChange }) {
  return (
    <select
      className="w-full px-4 py-0.5  text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none "
      value={value}
      name={name}
      onChange={onChange}
    >
      {options.map((option, i) => (
        <option value={option} key={i}>
          {option}
        </option>
      ))}
    </select>
  );
}
