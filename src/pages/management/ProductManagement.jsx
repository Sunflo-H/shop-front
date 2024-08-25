import React from "react";
import ProductList from "../../components/management/main/ProductManagement/ProductList";
import PageNation from "../../components/management/main/ProductManagement/PageNation";
import SearchBar from "../../components/management/main/ProductManagement/SearchBar";
import ManagementTitle from "../../components/management/main/shared/ManagementTitle";
import Filter from "../../components/management/main/ProductManagement/Filter";
import UploadProductBtn from "../../components/management/header/UploadProductBtn";
import RemoveSelectedBtn from "../../components/management/main/RemoveSeletedBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  setActiveCategory,
  setActiveStatus,
} from "../../slice/management/productManagementSlice";

const categoryOptions = [
  { value: "ALL", label: "전체 상품" },
  { value: "Man", label: "남성" },
  { value: "Woman", label: "여성" },
  { value: "Shoes", label: "신발" },
  { value: "Accessory", label: "악세사리" },
];

const statusOptions = [
  { value: "ALL", label: "전체 상태" },
  { value: "Sale", label: "판매중" },
  { value: "Sold Out", label: "품절" },
  { value: "Hide", label: "숨김" },
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
        <SearchBar />
        <UploadProductBtn />
        <RemoveSelectedBtn />
      </div>
      <ProductList />
      <PageNation />
    </div>
  );
}
