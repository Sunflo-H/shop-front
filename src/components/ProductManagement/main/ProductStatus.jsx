import React, { useEffect, useState } from "react";
import useProducts from "../../../hooks/useProducts";
import { updateProduct } from "../../../api/firebase_db";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { filterByStatus } from "../../../slice/productsManagement/productManagementSlice";

const statusList = ["ALL", "Sale", "Sold Out", "Hide"];

export default function ProductStatus() {
  const dispatch = useDispatch();
  const activeStatus = useSelector(
    (state) => state.productManagement.activeStatus
  );
  const products = useSelector(
    (state) => state.productManagement.products_filtered_category
  );

  //! slice안쓰는 버전
  // const statusList = useSelector((state) => state.productManagement.statusList);

  function getCountProductsByStatus(status) {
    let count = 0;
    if (status === "ALL") {
      count = products.length;
    } else {
      count = products.filter((product) => product[1].status === status).length;
    }
    return count;
  }

  return (
    <ul className="flex gap-4">
      {statusList.map((status, index) => (
        <li
          className={`p-4 pt-0 pb-2  font-bold cursor-pointer ${
            status === activeStatus &&
            "text-blue-500 border-blue-500 border-b-2"
          }`}
          key={index}
          onClick={() => dispatch(filterByStatus(status))}
        >
          {status} {getCountProductsByStatus(status)}
        </li>
      ))}
    </ul>
  );
}

const 업데이트코드 = (e) => {
  // let date = format(new Date(), "yyyy-MM-dd"); //=> '2014-01-11'
  // for (let i = 0; i < women.length; i++) {
  //   const [key, product] = women[i];
  //   const updatedProduct = { ...product };
  //   updatedProduct.registrationDate = date;
  //   updatedProduct.updateDate = date;
  //   updateProduct(key, updatedProduct);
  // }
  {
    /* <div onClick={handleTest}>업데이트!</div> */
  }
};
