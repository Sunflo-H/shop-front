import React from "react";
import DataListHeaderItem from "../ui/DataListHeaderItem";
import AllSelectBox from "../ui/AllSelectBox";

const headerItem = [
  { value: "Email", width: 60 },
  { value: "Name", width: 40 },
  { value: "Role", width: 32 },
  { value: "Number", width: 48 },
  { value: "Sign-Up Date", width: 40 },
];

export default function UserListHeader({
  users,
  checkboxList,
  setCheckboxList,
}) {
  return (
    <div className="flex py-2 border-b border-gray-300 font-bold bg-blue-100 ">
      <AllSelectBox
        users={users}
        checkboxList={checkboxList}
        setCheckboxList={setCheckboxList}
      />
      {headerItem.map((item, index) => (
        <DataListHeaderItem item={item} key={index} />
      ))}
    </div>
  );
}
