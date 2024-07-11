import React from "react";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";

export default function Category() {
  const categoryList = useSelector((state) => state.category.categoryList);
  return (
    <ul className="flex justify-center gap-8 mb-10">
      {categoryList.map((category, i) => (
        <CategoryItem category={category} key={i} />
      ))}
    </ul>
  );
}
