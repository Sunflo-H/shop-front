import React, { useState } from "react";

import CategoryItem from "./CategoryUI/CategoryItem";

const categoryList = ["ALL", "Men", "Women", "Accessories", "Shoes"];
export default function CategoryList() {
  return (
    <div className="self-start text-lg font-bold bg-white mx-6 pb-4 shadow-md">
      <div className="flex gap-2 text-xl text-blue-500 py-4 px-8">Category</div>
      {categoryList.map((currentCategory, index) => (
        <CategoryItem currentCategory={currentCategory} key={index} />
      ))}
    </div>
  );
}
