import React from "react";

export default function ProductListItem({ product }) {
  const { name, price, category, status, createdAt } = product;

  return (
    <li className="flex px-8 py-2 ">
      <div className="w-20">
        <input type="checkbox" />
      </div>
      <div className="w-72 text-center">{name}</div>
      <div className="w-28 text-center">{price}</div>
      <div className="w-40 text-center">{category}</div>
      <div className="w-40 text-center">{status}</div>
      <div className="w-40 text-center">{createdAt}</div>
    </li>
  );
}
