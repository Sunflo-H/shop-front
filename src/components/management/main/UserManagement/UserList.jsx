import React, { useState } from "react";
import UserListHeader from "./UserListHeader";
import UserListItem from "./UserListItem";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../../../../api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../../slice/management/userManagementSlice";

export default function UserList({ users }) {
  const dispatch = useDispatch();

  const queryClient = useQueryClient();
  const { page } = useSelector((state) => state.userManagement);
  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: (deleteCount) => {
      queryClient.invalidateQueries("users");
      if (deleteCount === users.length) dispatch(setPage(page - 1));
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return (
    <div className="mt-4 bg-white rounded-md shadow-md border border-gray-300 overflow-hidden">
      <UserListHeader users={users} />
      <ul>
        {users.map((user, i) => (
          <UserListItem
            user={user}
            key={user._id}
            index={i}
            mutation={mutation}
          />
        ))}
      </ul>
    </div>
  );
}
