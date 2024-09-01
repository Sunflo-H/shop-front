import React, { useState } from "react";
import ProductListItem from "./ProductListItem";
import ProductListHeader from "./ProductListHeader";

export default function ProductList({ products }) {
  const [checkboxList, setCheckboxList] = useState(
    new Array(products.length).fill(false)
  );

  return (
    <div className="mt-4 bg-white rounded-md shadow-md border border-gray-300 overflow-hidden">
      <ProductListHeader
        products={products}
        checkboxList={checkboxList}
        setCheckboxList={setCheckboxList}
      />
      <ul>
        {products.map((product, i) => (
          <ProductListItem
            product={product}
            key={product._id}
            index={i}
            checkboxList={checkboxList}
            setCheckboxList={setCheckboxList}
          />
        ))}
      </ul>
    </div>
  );
}
