import React, { useState } from "react";
import UserListHeader from "./UserListHeader";
import UserListItem from "./UserListItem";

export default function UserList({ users }) {
  return (
    <div className="mt-4 bg-white rounded-md shadow-md border border-gray-300 overflow-hidden">
      <UserListHeader users={users} />
      <ul>
        {users.map((user, i) => (
          <UserListItem user={user} key={user._id} index={i} />
        ))}
      </ul>
    </div>
  );
}
