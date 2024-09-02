import React, { useEffect, useState } from "react";
import PageNation from "../../components/management/main/ProductManagement/PageNation";
import SearchBar from "../../components/management/main/ui/SearchBar";
import ManagementTitle from "../../components/management/main/ui/ManagementTitle";
import Filter from "../../components/management/main/ui/Filter";
import RemoveSelectedBtn from "../../components/management/main/ui/RemoveSeletedBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveRole,
  setCheckboxList,
  setLimit,
  setPage,
  setSearchQuery,
} from "../../slice/management/userManagementSlice";
import GoAddPageButton from "../../components/management/main/ui/GoAddPageButton";
import Limit from "../../components/management/main/ui/Limit";
import DetailModal from "../../components/management/main/ProductManagement/DetailModal";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/productApi";
import Swal from "sweetalert2";
import Reset from "../../components/management/main/ui/Reset";
import UserList from "../../components/management/main/UserManagement/UserList";

const roleOptions = [
  { value: "ALL", label: "ALL Role" },
  { value: "User", label: "User" },
  { value: "Admin", label: "Admin" },
];

export default function UserManagement() {
  const dispatch = useDispatch();

  const { activeRole, page, limit, searchQuery } = useSelector(
    (state) => state.userManagement
  );

  const [prevQueryParams, setPrevQueryParams] = useState({
    role: "ALL",
    page: 1,
    limit: 10,
    searchQuery: "",
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["users", activeRole, page, limit, searchQuery],
    queryFn: () => fetchProducts(activeRole, page, limit, searchQuery),
  });

  // dispatch(setCheckboxList(new Array(users.length).fill(false)));

  // 데이터가 0개일 때 필터 복구
  useEffect(() => {
    if (isLoading) return;

    if (data?.length === 0) {
      Swal.fire("No data available");
      const isRoleChange = activeRole !== prevQueryParams.role;
      const isSearchQeuryChange = searchQuery !== prevQueryParams.searchQuery;

      // 기존 상태로 되돌리기
      if (isRoleChange) dispatch(setActiveRole(prevQueryParams.role));

      if (isSearchQeuryChange)
        dispatch(setSearchQuery(prevQueryParams.searchQuery));

      dispatch(setPage(prevQueryParams.page));
    } else {
      setPrevQueryParams({
        Role: activeRole,
        page,
        limit,
        searchQuery,
      });
    }
  }, [data, isLoading, activeRole]);

  const handleRoleChange = (e) => {
    const role = e.target.value;
    dispatch(setActiveRole(role));
    dispatch(setPage(1));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <ManagementTitle text="User Management" />
      <div className="flex w-full px-6 py-2 bg-white gap-3 shadow-md rounded-md ">
        <Filter
          options={roleOptions}
          onChange={handleRoleChange}
          value={activeRole}
        />
        <Limit limit={limit} setLimitAction={setLimit} />
        <SearchBar setSearchQueryAction={setSearchQuery} />
        <Reset />
        <GoAddPageButton url={"/manage/user/new"} />
      </div>
      <RemoveSelectedBtn />
      <UserList users={data} />
      <PageNation />

      {/* 모달 */}
      <DetailModal />
    </div>
  );
}
