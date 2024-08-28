import React, { useState } from "react";
import ProductList from "../../components/management/main/ProductManagement/ProductList";
import PageNation from "../../components/management/main/ProductManagement/PageNation";
import SearchBar from "../../components/management/main/ui/SearchBar";
import ManagementTitle from "../../components/management/main/ui/ManagementTitle";
import Filter from "../../components/management/main/ui/Filter";
import RemoveSelectedBtn from "../../components/management/main/RemoveSeletedBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  setActiveCategory,
  setActiveStatus,
} from "../../slice/management/productManagementSlice";
import GoAddPageButton from "../../components/management/main/ui/GoAddPageButton";
import Limit from "../../components/management/main/ui/Limit";
import ProductDetail from "../../components/management/main/ProductManagement/ProductDetail";

const categoryOptions = [
  { value: "ALL", label: "ALL Products" },
  { value: "Man", label: "Man" },
  { value: "Woman", label: "Woman" },
  { value: "Shoes", label: "Shoes" },
  { value: "Accessory", label: "Accessory" },
];

const statusOptions = [
  { value: "ALL", label: "ALL Status" },
  { value: "Sale", label: "Sale" },
  { value: "Sold Out", label: "Sold Out" },
  { value: "Hide", label: "Hide" },
];

export default function ProductManagement() {
  const dispatch = useDispatch();

  const { activeCategory, activeStatus, page, limit } = useSelector(
    (state) => state.productManagement
  );

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    dispatch(setActiveCategory(category));
    dispatch(fetchProduct({ category, status: activeStatus, page, limit }));
  };

  const handleStatusChange = (e) => {
    const status = e.target.value;
    dispatch(setActiveStatus(status));
    dispatch(fetchProduct({ category: activeCategory, status, page, limit }));
  };
  return (
    <div>
      <ManagementTitle text="Product Management" />
      <div className="flex w-full px-6 py-2 bg-white gap-3 shadow-md rounded-md ">
        <Filter
          options={categoryOptions}
          onChange={handleCategoryChange}
          value={activeCategory}
        />
        <Filter
          options={statusOptions}
          onChange={handleStatusChange}
          value={activeStatus}
        />
        <Limit />
        <SearchBar />
        <GoAddPageButton url={"/manage/product/new"} />
      </div>
      <RemoveSelectedBtn />
      <ProductList />
      <PageNation />
      {/* <div className="bg-black absolute top-0 w-screen h-screen"></div> */}
    </div>
  );
}
