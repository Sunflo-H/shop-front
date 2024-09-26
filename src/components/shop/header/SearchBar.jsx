import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const [isFocus, setIsFocus] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  console.log(searchInput);
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClick = () => {
    navigate(`/products/${searchInput}`);
    // 위 페이지에서 상품 데이터 렌더링할 수 있는 세팅해야지;
  };

  return (
    <div className="hidden md:block mx-2 h-full">
      <div
        className={`flex items-center mt-3.5 border
        ${isFocus && "border-black"}`}
      >
        <input
          type="text"
          placeholder="Search Adonis"
          className="p-2 text-sm focus:outline-none"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={handleSearchInputChange}
          value={searchInput}
        />
        <AiOutlineSearch
          className="text-2xl mr-2 cursor-pointer"
          onClick={handleSearchClick}
        />
      </div>
    </div>
  );
}
