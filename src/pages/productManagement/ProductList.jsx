import React from "react";
import Nav from "../../components/shop/header/Nav";
import SelectBox from "../../components/ProductManagement/main/ProductList/ProductListMain/SelectBox";
import ProductStatus from "../../components/ProductManagement/main/ProductList/ProductListMain/ProductStatus";
import List from "../../components/ProductManagement/main/ProductList/ProductListMain/List";
import PageNation from "../../components/ProductManagement/main/ProductList/ProductListMain/PageNation";
import SearchBar from "../../components/ProductManagement/main/ProductList/ProductListMain/SearchBar";

export default function ProductList() {
  return (
    <>
      <Nav />
      <div className="grow">
        <div className="flex border-gray-300 border-b ">
          <ProductStatus />
          <SelectBox />
        </div>
        <SearchBar />
        <List />
        <PageNation />
      </div>
    </>
  );
}
