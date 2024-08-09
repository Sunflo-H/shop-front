import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  setActiveStatus,
} from "../../../../slice/productsManagement/productListSlice";

const statusList = ["ALL", "Sale", "Sold Out", "Hide"];

export default function ProductStatus() {
  const dispatch = useDispatch();
  const activeStatus = useSelector((state) => state.productList.activeStatus);
  const products_origin = useSelector(
    (state) => state.productList.products_origin
  );

  function getCountProductsByStatus(status) {
    let count = 0;
    if (status === "ALL") count = products_origin.length;
    else
      count = products_origin.filter(
        (product) => product.status === status
      ).length;

    return count;
  }

  const handleStatusClick = (status) => {
    if (status === "ALL") {
      status = "";
      dispatch(setActiveStatus("ALL"));
    } else {
      dispatch(setActiveStatus(status));
    }
    dispatch(fetchProduct({ status }));
  };

  return (
    <ul className="flex gap-4">
      {statusList.map((status, index) => (
        <li
          className={`p-4 pt-0 pb-2  font-bold cursor-pointer ${
            status === activeStatus &&
            "text-blue-500 border-blue-500 border-b-2"
          }`}
          key={index}
          onClick={() => handleStatusClick(status)}
        >
          {status} {getCountProductsByStatus(status)}
        </li>
      ))}
    </ul>
  );
}
