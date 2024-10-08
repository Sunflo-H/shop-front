import React, { useState } from "react";

export default function Filter({ options, onChange, value }) {
  return (
    <div className="">
      <select
        className="px-4 py-2 font-bold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        value={value}
        onChange={onChange}
      >
        {options.map((option, i) => (
          <option value={option.value} key={i}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
