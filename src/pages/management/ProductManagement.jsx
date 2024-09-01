import React, { useEffect, useState } from "react";
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
  setPage,
} from "../../slice/management/productManagementSlice";
import GoAddPageButton from "../../components/management/main/ui/GoAddPageButton";
import Limit from "../../components/management/main/ui/Limit";
import DetailModal from "../../components/management/main/ProductManagement/DetailModal";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { fetchProducts } from "../../api/productApi";
import Swal from "sweetalert2";

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
  const [prevQueryParams, setPrevQueryParams] = useState({
    category: "ALL",
    status: "ALL",
    page: 1,
    limit: 10,
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", activeCategory, activeStatus, page, limit],
    queryFn: () => fetchProducts(activeCategory, activeStatus, page, limit),
  });

  // 데이터가 0개일 때 필터 복구
  useEffect(() => {
    if (isLoading) return;

    if (data?.length === 0) {
      Swal.fire("No data available");

      // 기존 상태로 되돌리기
      if (activeCategory !== prevQueryParams.category) {
        dispatch(setActiveCategory(prevQueryParams.category));
      }
      if (activeStatus !== prevQueryParams.status) {
        dispatch(setActiveStatus(prevQueryParams.status));
      }
      dispatch(setPage(prevQueryParams.page));
    } else {
      setPrevQueryParams({
        category: activeCategory,
        status: activeStatus,
        page,
        limit,
      });
    }
  }, [data, isLoading, activeCategory, activeStatus]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    dispatch(setActiveCategory(category));
    dispatch(setPage(1));
  };

  const handleStatusChange = (e) => {
    const status = e.target.value;
    dispatch(setActiveStatus(status));
    dispatch(setPage(1));
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
      <ProductList products={data} />
      <PageNation />

      {/* 모달 */}
      <DetailModal />
    </div>
  );
}
