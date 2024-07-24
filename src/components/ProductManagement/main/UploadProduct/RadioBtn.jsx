import React from "react";

export default function RadioBtn({ category, id, name }) {
  return (
    <label>
      <input type="radio" name={name} value={id} required />
      <span className="mr-6 ml-2">{category}</span>
    </label>
  );
}
