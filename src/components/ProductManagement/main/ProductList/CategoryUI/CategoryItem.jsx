import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  setActiveCategory,
} from "../../../../../slice/productsManagement/productListSlice";

export default function CategoryItem({ category }) {
  const dispatch = useDispatch();
  const { activeCategory, activeStatus, page, limit } = useSelector(
    (state) => state.productList
  );

  const handleClick = (category) => {
    dispatch(setActiveCategory(category));
    dispatch(fetchProduct({ category, status: activeStatus, page, limit }));
  };

  const activeCategoryStyle = `text-blue-600 bg-blue-100`;
  return (
    <div
      className={`px-8 py-2 cursor-pointer hover:bg-blue-50 ${
        activeCategory === category ? activeCategoryStyle : ""
      } `}
      onClick={() => handleClick(category)}
    >
      {category}
    </div>
  );
}

/**
 * fetch를 두개로 나누어서 해봤어
 * 처음 렌더링할 때는 allProducts 를 가지고 오고,
 * 필터링을 하면 products를 가지고 올거야
 */
