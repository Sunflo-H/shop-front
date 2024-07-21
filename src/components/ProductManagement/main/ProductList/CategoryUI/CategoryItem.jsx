import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../../../../../slice/productsManagement/productManagementSlice";

export default function CategoryItem({ currentCategory }) {
  const dispatch = useDispatch();

  // 현재 활성화 중인 카테고리 값을 가져온다.
  // productManamenetSlice에서 할지
  // categorySlice에서 할지
  // productManamenetSlice 여기가 더 나을듯?
  // 여기서 filter = {category, status} 이 값을 가져오는거지
  const activeCategory = useSelector(
    (state) => state.productManagement.activeCategory
  );

  const activeCategoryStyle = `text-blue-600 bg-blue-100`;

  return (
    <div
      className={`pl-12 py-2 cursor-pointer hover:bg-blue-50 ${
        activeCategory === currentCategory ? activeCategoryStyle : ""
      } `}
      onClick={() => dispatch(filterByCategory(currentCategory))}
    >
      {currentCategory}
    </div>
  );
}
