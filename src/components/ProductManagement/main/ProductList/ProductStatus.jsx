import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  setActiveStatus,
} from "../../../../slice/productsManagement/productListSlice";

const statusList = ["ALL", "Sale", "Sold Out", "Hide"];

export default function ProductStatus() {
  const dispatch = useDispatch();
  const activeStatus = useSelector((state) => state.productList.activeStatus);
  const products_filter_category = useSelector(
    (state) => state.productList.products_filter_category
  );

  function getCountProductsByStatus(status) {
    let count = 0;
    if (status === "ALL") count = products_filter_category.length;
    else
      count = products_filter_category.filter(
        (product) => product.status === status
      ).length;
    return count;
  }

  const handleStatusClick = (status) => {
    status === "ALL"
      ? dispatch(setActiveStatus("ALL"))
      : dispatch(setActiveStatus(status));
  };

  return (
    <ul className="flex gap-4">
      {statusList.map((status, index) => (
        <li
          className={`w-32 m-auto  font-bold cursor-pointer flex justify-center
            ${
              status === activeStatus &&
              "text-blue-500 border-blue-500 border-b-2"
            }`}
          key={index}
          onClick={() => handleStatusClick(status)}
        >
          <div className="flex gap-2">
            <div>{status}</div>
            <div className="">11</div>
          </div>
        </li>
        // <li
        //   className={`w-32 p-4 pt-0 pb-2  font-bold cursor-pointer
        //     ${status === "Sold Out" && "min-w-36"}
        //     ${
        //       status === activeStatus &&
        //       "text-blue-500 border-blue-500 border-b-2"
        //     }`}
        //   key={index}
        //   onClick={() => handleStatusClick(status)}
        // >
        //   <div className="flex gap-2">
        //     <div>{status}</div>
        //     <div className="">11</div>
        //   </div>
        // </li>
      ))}
    </ul>
  );
}
