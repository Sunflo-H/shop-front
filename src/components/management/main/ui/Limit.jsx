import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  setLimit,
} from "../../../../slice/management/productManagementSlice";

export default function Limit() {
  const dispatch = useDispatch();
  const { activeCategory, activeStatus, page, limit } = useSelector(
    (state) => state.productManagement
  );
  const handleChange = (e) => {
    dispatch(setLimit(e.target.value));
    // dispatch(
    //   fetchProduct({
    //     category: activeCategory,
    //     status: activeStatus,
    //     page,
    //     limit: e.target.value,
    //   })
    // );
  };

  return (
    <div className="">
      <select
        className="px-4 py-2 font-bold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        value={limit}
        onChange={handleChange}
      >
        <option value="10">Show 10 Products</option>
        <option value="20">Show 20 Products</option>
        <option value="30">Show 30 Products</option>
      </select>
    </div>
  );
}
