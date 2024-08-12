import React from "react";
import { useDispatch } from "react-redux";
import { changeViewCount } from "../../../../slice/productsManagement/pageNationSlice";

export default function SelectBox() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeViewCount(e.target.value));
  };

  return (
    <div className="ml-8">
      <select
        className="px-4 py-[1px] font-bold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        onChange={handleChange}
      >
        <option value="10">Show 10 items</option>
        <option value="20">Show 20 items</option>
        <option value="30">Show 30 items</option>
      </select>
    </div>
  );
}
