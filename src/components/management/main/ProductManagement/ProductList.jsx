import React, { useEffect } from "react";
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
        {products.map((product) => (
          <ProductListItem product={product} key={product._id} />
        ))}
      </ul>
    </div>
  );
}
