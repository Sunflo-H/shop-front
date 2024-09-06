import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  const handleSearchClick = () => {
    // searchModalOpen 기능이 들어가야함
    console.log(1);
  };

  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="hidden md:block mx-2 h-full" onClick={handleSearchClick}>
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
        />
        <AiOutlineSearch className="text-2xl mr-2 cursor-pointer" />
      </div>
    </div>
  );
}
