import React, { useState } from "react";
import ProductListItem from "./ProductListItem";
import ProductListHeader from "./ProductListHeader";
import { useSelector } from "react-redux";

export default function ProductList({ products }) {
  return (
    <div className="mt-4 bg-white rounded-md shadow-md border border-gray-300 overflow-hidden">
      <ProductListHeader products={products} />
      <ul>
        {products.map((product, i) => (
          <ProductListItem product={product} key={product._id} index={i} />
        ))}
      </ul>
    </div>
  );
}
