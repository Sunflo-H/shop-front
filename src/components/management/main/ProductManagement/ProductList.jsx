import React, { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem";
import { useDispatch, useSelector } from "react-redux";
import ProductListHeader from "./ProductListHeader";
import {
  fetchAllProduct,
  fetchProduct,
} from "../../../../slice/management/productManagementSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const { activeCategory, activeStatus, page, limit } = useSelector(
    (state) => state.productManagement
  );

  const [checkboxList, setCheckboxList] = useState(getCheckboxObj(limit));

  const products = useSelector((state) => state.productManagement.products);
  useEffect(() => {
    dispatch(fetchAllProduct());
    dispatch(
      fetchProduct({
        category: activeCategory,
        status: activeStatus,
        page,
        limit,
      })
    );
  }, [dispatch]);

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
