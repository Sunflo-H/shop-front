import React from "react";

export default function RadioBtn({ value, name }) {
  return (
    <label>
      <input type="radio" name={name} value={value} />
      <span className="mr-6 ml-2">{value}</span>
    </label>
  );
}
