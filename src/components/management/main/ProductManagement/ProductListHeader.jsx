import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllCheckBox,
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
  { value: "Quantity", width: "w-40" },
];

export default function ProductListHeader({ products }) {
  // 기능을 AllCheckBox 컴포넌트로 이동시킴
  // const dispatch = useDispatch();
  // const idList = products.map((item) => item._id);
  // const { checkboxList, allCheckBox } = useSelector(
  //   (state) => state.productManagement
  // );

  // // 전체선택버튼을 눌렀을 때
  // const handleSelectAll = (e) => {
  //   if (e.target.checked) {
  //     dispatch(setAllCheckBox(true));
  //     dispatch(setCheckboxList(checkboxList.map(() => true)));
  //     dispatch(setIdList(idList));
  //   } else {
  //     dispatch(setAllCheckBox(false));
  //     dispatch(setCheckboxList(checkboxList.map(() => false)));
  //     dispatch(setIdList([]));
  //   }
  // };

  return (
    <div className="flex py-2 border-b border-gray-300 font-bold bg-blue-100 ">
      {/* <AllCheckBox onChange={handleSelectAll} allCheckBox={allCheckBox} /> */}
      <AllCheckBox products={products} />
      {headerItem.map((item, index) => (
        <DataListHeaderItem item={item} key={index} />
      ))}
    </div>
  );
}
