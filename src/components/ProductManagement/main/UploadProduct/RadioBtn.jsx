import React from "react";
import { useSelector } from "react-redux";

export default function RadioBtn({ category, onChange }) {
  const activeCategory = useSelector(
    (state) => state.createProduct.newProduct.category
  );

  return (
    <label>
      <input
        type="radio"
        value={category}
        required
        checked={activeCategory === category}
        onChange={onChange}
      />
      <span className="mr-6 ml-2">{category}</span>
    </label>
  );
}
