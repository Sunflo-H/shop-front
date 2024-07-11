import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { chageCurrentCategory } from "../../../../slice/categorySlice";

export default function CategoryItem({ category }) {
  const dispatch = useDispatch();
  const currentCategory = useSelector(
    (state) => state.category.currentCategory
  );
  const handleCategoryClick = () => {
    dispatch(chageCurrentCategory(category));
  };

  return (
    <li
      className={`cursor-pointer hover:border-black border-b-2 
                ${
                  currentCategory === category
                    ? "border-black font-bold"
                    : "border-transparent"
                }`}
      onClick={handleCategoryClick}
    >
      {category}
    </li>
  );
}
