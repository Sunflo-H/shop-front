import { useDispatch, useSelector } from "react-redux";
import { categoryFilter } from "../../../../../slice/productsManagement/productListSlice";

export default function CategoryItem({ currentCategory }) {
  const dispatch = useDispatch();

  // 현재 활성화 중인 카테고리 값을 가져온다.
  const activeCategory = useSelector(
    (state) => state.productList.activeCategory
  );
  console.log(activeCategory);

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
