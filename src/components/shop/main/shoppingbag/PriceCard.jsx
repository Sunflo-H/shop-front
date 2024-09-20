import React from "react";

export default function PriceCard({ title, price }) {
  return (
    <div className="bg-gray-100 rounded-md px-8 py-3 text-center">
      <div className="text-md font-bold ">{title}</div>
      <div className="text-lg font-bold font-sans">${price}</div>
    </div>
  );
}
