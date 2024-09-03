import React, { useEffect, useState } from "react";
import SearchBar from "../../components/management/main/ui/SearchBar";
import ManagementTitle from "../../components/management/main/ui/ManagementTitle";
import Filter from "../../components/management/main/ui/Filter";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveRole,
  setCheckboxList,
  setIsSelectMode,
  setLimit,
  setPage,
  setSearchQuery,
} from "../../slice/management/userManagementSlice";
import GoAddPageButton from "../../components/management/main/ui/GoAddPageButton";
import Limit from "../../components/management/main/ui/Limit";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Reset from "../../components/management/main/ui/Reset";
import UserList from "../../components/management/main/UserManagement/UserList";
import { deleteUser, fetchUsers } from "../../api/userApi";
import RemoveSelectedBtn from "../../components/management/main/ui/RemoveSeletedBtn";
import { alert_deleteProduct } from "../../alerts/warning";
import DetailModal from "../../components/management/main/UserManagement/DetailModal";
import PageNation from "../../components/management/main/UserManagement/PageNation";

const roleOptions = [
  { value: "ALL", label: "ALL Role" },
  { value: "User", label: "User" },
  { value: "Admin", label: "Admin" },
];

export default function UserManagement() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

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
    queryFn: () => fetchUsers(activeRole, page, limit, searchQuery),
  });

  // 데이터가 0개일 때 필터 복구
  useEffect(() => {
    if (isLoading) return;

    if (data.length === 0) {
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
      dispatch(setCheckboxList(new Array(data.length).fill(false)));
    }
  }, [data, isLoading, activeRole]);

  const handleRoleChange = (e) => {
    const role = e.target.value;
    dispatch(setActiveRole(role));
    dispatch(setPage(1));
  };

  const { isSelectMode, idList } = useSelector((state) => state.userManagement);
  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleRemoveClick = () => {
    alert_deleteProduct().then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        mutation.mutate(idList);
        dispatch(setIsSelectMode(false));
      }
    });
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
        <GoAddPageButton url={"/manage/user/register"} />
      </div>
      <RemoveSelectedBtn
        isSelectMode={isSelectMode}
        onClick={handleRemoveClick}
      />
      <UserList users={data} />
      <PageNation />

      {/* 모달 */}
      <DetailModal />
    </div>
  );
}
