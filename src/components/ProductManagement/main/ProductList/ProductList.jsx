import React from "react";
import Nav from "./Category/Nav";
import ProductStatus from "./ProductStatus";
import SelectBox from "./SelectBox";
import SearchBar from "./SearchBar";
import List from "./List";
import PageNation from "./PageNation";

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
