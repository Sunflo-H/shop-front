import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  setActiveStatus,
} from "../../../../slice/productsManagement/productListSlice";

const statusList = ["ALL", "Sale", "Sold Out", "Hide"];

export default function ProductStatus() {
  const dispatch = useDispatch();
  const { activeCategory, activeStatus, page, limit } = useSelector(
    (state) => state.productList
  );

  const products_filteredByCategory = useSelector(
    (state) => state.productList.products_filteredByCategory
  );

  function getCountProductsByStatus(status) {
    let count = 0;
    if (status === "ALL") count = products_filteredByCategory.length;
    else
      count = products_filteredByCategory.filter(
        (product) => product.status === status
      ).length;
    return count;
  }

  const handleStatusClick = (status) => {
    if (status === "ALL") {
      dispatch(setActiveStatus("ALL"));
      dispatch(
        fetchProduct({ category: activeCategory, status: "", page, limit })
      );
    } else {
      dispatch(setActiveStatus(status));
      dispatch(fetchProduct({ category: activeCategory, status, page, limit }));
    }
  };

  return (
    <ul className="flex gap-2">
      {statusList.map((status, index) => (
        <li
          className={`w-[80px] px-4 pb-1 font-bold cursor-pointer
            ${status === "Sold Out" && "w-[120px]"}
            ${
              status === activeStatus &&
              "text-blue-500 border-blue-500 border-b-2"
            }`}
          key={index}
          onClick={() => handleStatusClick(status)}
        >
          <div className="flex gap-2">
            <div>{status}</div>
            <div className="">{getCountProductsByStatus(status)}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
