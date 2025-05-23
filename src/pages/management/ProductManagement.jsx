import React, { useEffect, useState } from "react";
import PageNation from "../../components/management/main/ProductManagement/PageNation";
import SearchBar from "../../components/management/main/ui/SearchBar";
import ManagementTitle from "../../components/management/main/ui/ManagementTitle";
import Filter from "../../components/management/main/ui/Filter";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilter,
  setActiveCategory,
  setActiveStatus,
  setCheckboxList,
  setLimit,
  setPage,
  setSearchQuery,
} from "../../slice/management/productManagementSlice";
import GoAddPageButton from "../../components/management/main/ui/GoAddPageButton";
import Limit from "../../components/management/main/ui/Limit";
import DetailModal from "../../components/management/main/ProductManagement/DetailModal";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/productApi";
import Swal from "sweetalert2";
import Reset from "../../components/management/main/ui/Reset";
import RemoveSelectedBtn from "../../components/management/main/ui/RemoveSeletedBtn";

import ProductListHeader from "../../components/management/main/ProductManagement/ProductListHeader";
import ProductListItem from "../../components/management/main/ProductManagement/ProductListItem";

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

  const { activeCategory, activeStatus, page, limit, searchQuery } =
    useSelector((state) => state.productManagement);

  const [prevQueryParams, setPrevQueryParams] = useState({
    category: "ALL",
    status: "ALL",
    page: 1,
    limit: "10",
    searchQuery: "",
  });

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "productManagement",
      activeCategory,
      activeStatus,
      page, // ! 여기서 로딩이 발생하는거네
      limit, // ! 여기서 로딩이 발생하는거네
      searchQuery,
    ],
    queryFn: () =>
      getProducts({
        category: activeCategory,
        status: activeStatus,
        page,
        limit,
        searchQuery,
      }),
    keepPreviousData: true,
  });

  // useQuery onSuccess
  useEffect(() => {
    if (isLoading) return;

    if (products.length === 0) {
      // 데이터가 0개일 때 필터를 이전 상태로 되돌린다.
      Swal.fire("No data available");
      const isCategoryChange = activeCategory !== prevQueryParams.category;
      const isStatusChange = activeStatus !== prevQueryParams.status;
      const isSearchQeuryChange = searchQuery !== prevQueryParams.searchQuery;

      // 기존 상태로 되돌리기
      if (isCategoryChange)
        dispatch(setActiveCategory(prevQueryParams.category));

      if (isStatusChange) dispatch(setActiveStatus(prevQueryParams.status));

      if (isSearchQeuryChange)
        dispatch(setSearchQuery(prevQueryParams.searchQuery));
      dispatch(setPage(prevQueryParams.page));
    } else {
      setPrevQueryParams({
        category: activeCategory,
        status: activeStatus,
        page,
        limit,
        searchQuery,
      });
      dispatch(setCheckboxList(new Array(products.length).fill(false)));
    }
  }, [products, isLoading, activeCategory, activeStatus]);

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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
        <Limit limit={limit} setLimitAction={setLimit} />
        <SearchBar setSearchQueryAction={setSearchQuery} />
        <Reset resetFilterAction={resetFilter} />
        <GoAddPageButton url={"/manage/product/new"} />
      </div>

      <RemoveSelectedBtn products={products} page={page} />

      <div className="mt-4 bg-white rounded-md shadow-md border border-gray-300 overflow-hidden">
        <ProductListHeader products={products} />
        <ul>
          {products.map((product, i) => (
            <ProductListItem
              products={products}
              product={product}
              index={i}
              key={product._id}
            />
          ))}
        </ul>
      </div>

      <PageNation />

      {/* 모달 */}
      <DetailModal />
    </div>
  );
}
