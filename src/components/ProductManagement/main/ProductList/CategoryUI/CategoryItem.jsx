import { useDispatch, useSelector } from "react-redux";
import { categoryFilter } from "../../../../../slice/productsManagement/productListSlice";
import { useEffect } from "react";

export default function CategoryItem({ currentCategory }) {
  const dispatch = useDispatch();

  const activeCategory = useSelector(
    (state) => state.productList.activeCategory
  );

  const activeCategoryStyle = `text-blue-600 bg-blue-100`;

  return (
    <div
      className={`px-8 py-2 cursor-pointer hover:bg-blue-50 ${
        activeCategory === currentCategory ? activeCategoryStyle : ""
      } `}
      onClick={() => dispatch(categoryFilter(currentCategory))}
    >
      {currentCategory}
    </div>
  );
}
