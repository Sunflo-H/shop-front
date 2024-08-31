import React, { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem";
import { useDispatch, useSelector } from "react-redux";
import ProductListHeader from "./ProductListHeader";
import {
  // fetchAllProduct,
  fetchProduct,
} from "../../../../slice/management/productManagementSlice";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts, fetchProducts } from "../../../../api/productApi";

export default function ProductList({ products }) {
  // const dispatch = useDispatch();
  const { limit } = useSelector((state) => state.productManagement);
  // const products = useSelector((state) => state.productManagement.products);
  const [checkboxList, setCheckboxList] = useState(getCheckboxObj(limit));

  return (
    <div className="mt-4 bg-white rounded-md shadow-md border border-gray-300 overflow-hidden">
      <ProductListHeader />
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

function getCheckboxObj(limit) {
  let obj = new Object();
  for (let i = 0; i < limit; i++) {
    const key = "checkbox" + (i + 1);
    obj[key] = false;
  }
  return obj;
}
