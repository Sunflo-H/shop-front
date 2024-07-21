import React from "react";
import { useDispatch } from "react-redux";
import { changeViewCount } from "../../../../../slice/productsManagement/pageNationSlice";

export default function SelectBox() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeViewCount(e.target.value));
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="10">Show 10 items</option>
        <option value="20">Show 20 items</option>
        <option value="30">Show 30 items</option>
      </select>
    </div>
  );
}
