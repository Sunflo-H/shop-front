import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from "../../../../../slice/productsManagement/productListSlice";

export default function CategoryItem({ category }) {
  const dispatch = useDispatch();

  const activeCategory = useSelector(
    (state) => state.productList.activeCategory
  );

  const handleClick = (category) => {
    dispatch(setActiveCategory(category));
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
