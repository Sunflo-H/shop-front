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
  const [checkboxList, setCheckboxList] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: false,
  });

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

  const products = useSelector((state) => state.productManagement.products);

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
