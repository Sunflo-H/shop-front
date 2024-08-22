import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewProduct } from "../../../../slice/management/createProductSlice";

export default function RadioBtn({ category }) {
  const dispatch = useDispatch();
  const activeCategory = useSelector(
    (state) => state.createProduct.newProduct.category
  );

  const handleCategoryChange = (e) => {
    const key = "category";
    const value = e.target.value;
    dispatch(setNewProduct({ key, value }));
  };

  return (
    <label>
      <input
        type="radio"
        value={category}
        required
        checked={activeCategory === category}
        onChange={handleCategoryChange}
      />
      <span className="mr-6 ml-2">{category}</span>
    </label>
  );
}
