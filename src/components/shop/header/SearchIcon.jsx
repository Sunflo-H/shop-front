import { AiOutlineSearch } from "react-icons/ai";

export default function SearchIcon() {
  const handleSearchClick = () => {
    // searchModalOpen 기능이 들어가야함
    console.log(1);
  };
  return (
    <div
      className="hidden md:block mx-2 px-1 pt-5 pb-3  md:border-transparent md:border-b-2 hover:border-black cursor-pointer "
      onClick={handleSearchClick}
    >
      <AiOutlineSearch className="text-2xl" />
    </div>
  );
}
