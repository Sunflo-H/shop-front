import React from "react";
import CategoryList from "../../components/management/main/ProductManagement/CategoryList";
import SelectBox from "../../components/management/main/ProductManagement/SelectBox";
import ProductStatus from "../../components/management/main/ProductManagement/ProductStatus";
import ProductList from "../../components/management/main/ProductManagement/ProductList";
import PageNation from "../../components/management/main/ProductManagement/PageNation";
import SearchBar from "../../components/management/main/ProductManagement/SearchBar";
import ManagementTitle from "../../components/management/main/shared/ManagementTitle";
import CategoryFilter from "../../components/management/main/ProductManagement/CategoryFilter";
import StatusFilter from "../../components/management/main/ProductManagement/StatusFilter";
import UploadProductBtn from "../../components/management/header/UploadProductBtn";
import RemoveSelectedBtn from "../../components/management/main/RemoveSeletedBtn";

export default function ProductManagement() {
  return (
    <div>
      <ManagementTitle text="Product Management" />
      <div className="flex w-full px-6 py-2 bg-white gap-3 shadow-md rounded-md ">
        <CategoryFilter />
        <StatusFilter />
        <SearchBar />
        <UploadProductBtn />
        <RemoveSelectedBtn />
        {/* <div className="flex ">
          <ProductStatus />
          <SelectBox />
        </div> */}
      </div>
      <ProductList />
      <PageNation />
    </div>
  );
}
