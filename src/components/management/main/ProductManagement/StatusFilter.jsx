import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  setActiveCategory,
  setActiveStatus,
} from "../../../../slice/management/productManagementSlice";

export default function StatusFilter() {
  const dispatch = useDispatch();
  const { activeCategory, activeStatus, page, limit } = useSelector(
    (state) => state.productList
  );
  const handleChange = (e) => {
    const status = e.target.value;
    dispatch(setActiveStatus(status));
    dispatch(fetchProduct({ category: activeCategory, status, page, limit }));
  };
  return (
    <div className="">
      <select
        className="px-4 py-2 font-bold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        onChange={(e) => handleChange(e)}
      >
        <option value="ALL">전체 상태</option>
        <option value="Sale">판매중</option>
        <option value="Sold Out">품절</option>
        <option value="Hide">숨김</option>
      </select>
    </div>
  );
}
