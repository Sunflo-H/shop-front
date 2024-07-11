import React, { useState } from "react";
import CategoryItem from "./CategoryUI/CategoryItem";
import CategoryTitle from "./CategoryUI/CategoryTitle";
import { useSelector } from "react-redux";

const categoryList = ["ALL", "Men", "Women", "Accessories", "Shoes"];

export default function Nav_category() {
  const [isOpen, setIsOpen] = useState(true);

  const handleCollapsible = () => {
    setIsOpen((prev) => !prev);
  };

  //! slice 안써보려고 주석처리
  // const categoryList = useSelector(
  //   (state) => state.productManagement.categoryList
  // );

  return (
    <>
      <CategoryTitle
        title={"Category"}
        handleCollapsible={handleCollapsible}
        isOpen={isOpen}
      />

      <div
        className={`${
          isOpen ? " max-h-96" : "max-h-0"
        } overflow-hidden duration-200 `}
      >
        {categoryList.map((currentCategory, index) => (
          <CategoryItem currentCategory={currentCategory} key={index} />
        ))}
      </div>
    </>
  );
}
