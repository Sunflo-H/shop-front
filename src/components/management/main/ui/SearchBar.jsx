import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../../../slice/management/userManagementSlice";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    dispatch(setSearchQuery(input));
  };

  return (
    <div className="border border-gray-300 rounded-md overflow-hidden">
      <div className="flex justify-between h-full bg-white">
        <input
          className="px-6 outline-none "
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
