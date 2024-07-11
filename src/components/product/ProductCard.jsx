import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import useFavorites from "../../hooks/useFavorites";

export default function ProductCard({ product, currentCategory }) {
  const { title, imageUrl, category, price, id } = product;
  const { isFavorite, updateFavorites } = useFavorites(
    product,
    currentCategory
  );

  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/products/${category}/${id}`, { state: { product } });
  };

  const handleFavoritesClick = () => {
    updateFavorites.mutate();
  };

  return (
    <div className="m-1  ">
      <div className="flex items-center justify-between mb-4">
        <span className="bg-black text-white py-px px-1 text-sm">New</span>
        <AiFillHeart
          className={`text-2xl cursor-pointer ${isFavorite && "text-rose-500"}`}
          onClick={handleFavoritesClick}
        />
      </div>
      <div className="w-full cursor-pointer" onClick={handleProductClick}>
        <img src={imageUrl} alt="" />
      </div>
      <div className="flex">
        <div>{title}</div>
        <div className="ml-auto">{price}</div>
      </div>
      <div>{category}</div>
    </div>
  );
}
