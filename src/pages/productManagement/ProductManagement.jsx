import { Outlet } from "react-router-dom";
import Header from "../../components/ProductManagement/header/Header";
import Nav from "../../components/ProductManagement/nav/Nav";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductStatus from "../../components/ProductManagement/main/ProductStatus";

import PageNation from "../../components/ProductManagement/main/PageNation";
import SelectBox from "../../components/ui/SelectBox";
import SearchBar from "../../components/ui/SearchBar";
import useProducts from "../../hooks/useProducts";
import { initProducts } from "../../slice/productsManagement/productManagementSlice";

export default function ProductManagement() {
  const dispatch = useDispatch();
  const {
    productsQuery_all: { data },
  } = useProducts();
  let productList_keyValue = transformKeyValue(data);

  useEffect(() => {
    dispatch(initProducts(productList_keyValue));
  }, [data]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-200 ">
      <Header />
      <div className="flex self-center w-screen max-w-screen-2xl ">
        <Nav />
        <div className="grow">
          <div className="flex border-gray-300 border-b ">
            <ProductStatus />
            <SelectBox />
          </div>
          <SearchBar />
          <Outlet />
          <PageNation />
        </div>
      </div>
    </div>
  );
}

function transformKeyValue(data) {
  const accessories = data ? Object.entries(data[0]) : []; // [[key,value],[key,value]] 형태
  const men = data ? Object.entries(data[1]) : [];
  const shoes = data ? Object.entries(data[2]) : [];
  const test = data ? Object.entries(data[3]) : [];
  const women = data ? Object.entries(data[4]) : [];

  const productList_keyValue = [
    ...accessories,
    ...men,
    ...shoes,
    ...women,
    ...test,
  ];
  return productList_keyValue;
}
