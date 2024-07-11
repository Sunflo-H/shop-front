import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setSearch } from "../../slice/productsManagement/productManagementSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };
  const handleSearch = () => {
    dispatch(setSearch(input));
  };

  return (
    <div className="mt-2 border ">
      <div className="flex justify-between bg-white">
        <input
          className="px-6 py-3 grow outline-none"
          type="text"
          placeholder="title search"
          value={input}
          onChange={handleChangeInput}
        />
        <CiSearch
          className="text-2xl self-center mr-4 cursor-pointer"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
}
