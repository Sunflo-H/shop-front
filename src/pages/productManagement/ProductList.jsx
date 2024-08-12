import React, { useEffect } from "react";
import CategoryList from "../../components/ProductManagement/main/ProductList/CategoryList";
import SelectBox from "../../components/ProductManagement/main/ProductList/SelectBox";
import ProductStatus from "../../components/ProductManagement/main/ProductList/ProductStatus";
import ProductItemList from "../../components/ProductManagement/main/ProductList/ProductItemList";
import PageNation from "../../components/ProductManagement/main/ProductList/PageNation";
import SearchBar from "../../components/ProductManagement/main/ProductList/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../slice/productsManagement/productListSlice";

export default function ProductList() {
  return (
    <>
      <CategoryList />
      <div className="grow">
        <div className="flex border-gray-300 border-b">
          <div className="flex ">
            <ProductStatus />
            <SelectBox />
          </div>
        </div>
        <SearchBar />
        <ProductItemList />
        <PageNation />
      </div>
    </>
  );
}
