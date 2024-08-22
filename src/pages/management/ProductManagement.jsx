import React from "react";
import CategoryList from "../../components/management/main/ProductList/CategoryList";
import SelectBox from "../../components/management/main/ProductList/SelectBox";
import ProductStatus from "../../components/management/main/ProductList/ProductStatus";
import ProductList from "../../components/management/main/ProductList/ProductList";
import PageNation from "../../components/management/main/ProductList/PageNation";
import SearchBar from "../../components/management/main/ProductList/SearchBar";
import ManagementTitle from "../../components/management/main/shared/ManagementTitle";
import CategoryFilter from "../../components/management/main/ProductList/CategoryFilter";
import StatusFilter from "../../components/management/main/ProductList/StatusFilter";
import UploadProductBtn from "../../components/management/header/UploadProductBtn";
import RemoveSelectedBtn from "../../components/management/main/RemoveSeletedBtn";

export default function ProductManagement() {
  return (
    <div>
      <ManagementTitle title="Product Management" />
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
