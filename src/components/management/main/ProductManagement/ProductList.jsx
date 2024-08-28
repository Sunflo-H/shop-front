import React, { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem";
import { useDispatch, useSelector } from "react-redux";
import ProductListHeader from "./ProductListHeader";
import {
  fetchAllProduct,
  fetchProduct,
} from "../../../../slice/management/productManagementSlice";
import ProductDetail from "./ProductDetail";

export default function ProductList() {
  const dispatch = useDispatch();
  const { activeCategory, activeStatus, page, limit } = useSelector(
    (state) => state.productManagement
  );
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [product, setProduct] = useState(null);
  const [checkboxList, setCheckboxList] = useState(getCheckboxObj(limit));

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

  const handleClick = (product) => {
    setIsShowDetail((prev) => !prev);
    setProduct(product);
  };

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
            onClick={handleClick}
          />
        ))}
      </ul>

      <ProductDetail isShowDetail={isShowDetail} product={product} />
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
