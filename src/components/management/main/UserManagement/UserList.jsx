import React, { useState } from "react";
import UserListHeader from "./UserListHeader";
import UserListItem from "./UserListItem";
import { useDispatch, useSelector } from "react-redux";

export default function UserList({ users }) {
  const [checkboxList, setCheckboxList] = useState(
    new Array(UserList.length).fill(false)
  );

  return (
    <div className="mt-4 bg-white rounded-md shadow-md border border-gray-300 overflow-hidden">
      <UserListHeader
        users={users}
        checkboxList={checkboxList}
        setCheckboxList={setCheckboxList}
      />
      <ul>
        {users.map((user, i) => (
          <UserListItem
            user={user}
            key={user._id}
            index={i}
            checkboxList={checkboxList}
            setCheckboxList={setCheckboxList}
          />
        ))}
      </ul>
    </div>
  );
}
