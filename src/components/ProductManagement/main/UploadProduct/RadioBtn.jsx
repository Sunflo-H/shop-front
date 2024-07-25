import React from "react";

export default function RadioBtn({
  category,
  id,
  name,
  selectCategory,
  onChange,
}) {
  return (
    <label>
      <input
        type="radio"
        name={name}
        value={id}
        required
        checked={selectCategory === category}
        data-category={category}
        onChange={onChange}
      />
      <span className="mr-6 ml-2">{category}</span>
    </label>
  );
}
