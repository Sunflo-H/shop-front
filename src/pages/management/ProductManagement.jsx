import React from "react";
import CategoryList from "../../components/management/main/ProductList/CategoryList";
import SelectBox from "../../components/management/main/ProductList/SelectBox";
import ProductStatus from "../../components/management/main/ProductList/ProductStatus";
import ProductItemList from "../../components/management/main/ProductList/ProductItemList";
import PageNation from "../../components/management/main/ProductList/PageNation";
import SearchBar from "../../components/management/main/ProductList/SearchBar";
import ManagementTitle from "../../components/management/main/shared/ManagementTitle";

export default function ProductManagement() {
  return (
    <div className="">
      <ManagementTitle title="상품 관리" />
      {/* <CategoryList /> */}
      {/* <div className="absolute left-1/2 -translate-x-1/2"> */}
      <div className="">
        <div className="flex border-gray-300 border-b ">
          <div className="flex ">
            <ProductStatus />
            <SelectBox />
          </div>
        </div>
        <SearchBar />
        <ProductItemList />
        <PageNation />
      </div>
    </div>
  );
}
