import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import { initProducts } from "../../slice/productsManagement/productManagementSlice";
import Header from "../../layout/manage/Header";
import Main from "../../layout/manage/Main";

export default function ProductManagementApp() {
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
      <Main />
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
