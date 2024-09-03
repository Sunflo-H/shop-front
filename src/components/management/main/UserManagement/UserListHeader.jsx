import React from "react";
import DataListHeaderItem from "../ui/DataListHeaderItem";
import AllCheckBox from "../ui/AllCheckBox";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllCheckbox,
  setCheckboxList,
  setIdList,
} from "../../../../slice/management/userManagementSlice";

const headerItem = [
  { value: "Email", width: "w-60" },
  { value: "Name", width: "w-40" },
  { value: "Role", width: "w-32" },
  { value: "Number", width: "w-48" },
  { value: "Sign-Up Date", width: "w-40" },
];

export default function UserListHeader({ users }) {
  const dispatch = useDispatch();
  const idList = users.map((user) => user._id);
  const { checkboxList, allCheckBox } = useSelector(
    (state) => state.userManagement
  );

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      dispatch(setAllCheckbox(true));
      dispatch(setCheckboxList(checkboxList.map(() => true)));
      dispatch(setIdList(idList));
    } else {
      dispatch(setAllCheckbox(false));
      dispatch(setCheckboxList(checkboxList.map(() => false)));
      dispatch(setIdList([]));
    }
  };
  return (
    <div className="flex py-2 border-b border-gray-300 font-bold bg-blue-100 ">
      <AllCheckBox onChange={handleSelectAll} allCheckBox={allCheckBox} />
      {headerItem.map((item, index) => (
        <DataListHeaderItem item={item} key={index} />
      ))}
    </div>
  );
}
