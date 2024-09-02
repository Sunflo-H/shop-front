import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCheckboxList,
  setIdList,
} from "../../../../slice/management/productManagementSlice";
import DataListHeaderItem from "../ui/DataListHeaderItem";
import AllCheckBox from "../ui/AllCheckBox";

const headerItem = [
  { value: "Name", width: "w-60" },
  { value: "Price", width: "w-40" },
  { value: "Category", width: "w-40" },
  { value: "Status", width: "w-40" },
  { value: "Creation Date", width: "w-40" },
];

export default function ProductListHeader({ products }) {
  const dispatch = useDispatch();
  const idList = products.map((item) => item._id);
  const { checkboxList } = useSelector((state) => state.productManagement);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      dispatch(setCheckboxList(checkboxList.map(() => true)));
      dispatch(setIdList(idList));
    } else {
      dispatch(setCheckboxList(checkboxList.map(() => false)));
      dispatch(setIdList([]));
    }
  };

  return (
    <div className="flex py-2 border-b border-gray-300 font-bold bg-blue-100 ">
      <AllCheckBox onChange={handleSelectAll} />
      {headerItem.map((item, index) => (
        <DataListHeaderItem item={item} key={index} />
      ))}
    </div>
  );
}
