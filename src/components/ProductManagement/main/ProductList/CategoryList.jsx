import React, { useState } from "react";

import CategoryItem from "./CategoryUI/CategoryItem";
import { useSelector } from "react-redux";
import CategoryHeader from "./CategoryUI/CategoryHeader";

export default function CategoryList() {
  const categoryList = useSelector((state) => state.productList.categoryList);
  return (
    <div className="self-start text-lg font-bold bg-white mx-6 mt-10 pb-4 shadow-md">
      <CategoryHeader />
      {categoryList.map((category, index) => (
        <CategoryItem category={category} key={index} />
      ))}
    </div>
  );
}
