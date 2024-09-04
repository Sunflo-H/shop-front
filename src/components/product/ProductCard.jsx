import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import useFavorites from "../../hooks/useFavorites";

export default function ProductCard({ product, currentCategory }) {
  const { name, image, category, price, id } = product;
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
    <div className="flex flex-col ">
      <div className="w-full cursor-pointer grow" onClick={handleProductClick}>
        <img
          src={image}
          loading="lazy"
          alt={name}
          className="w-full h-full object-cover" // object-cover를 추가해 이미지의 비율을 유지하며 컨테이너에 맞춤
        />
      </div>
      <div className="flex justify-between mt-2">
        <div className="font-bold">{name}</div>{" "}
        <AiFillHeart
          className={`text-2xl cursor-pointer ${isFavorite && "text-rose-500"}`}
          onClick={handleFavoritesClick}
        />
      </div>
      <div className="text-lg font-semibold text-gray-600">
        {price}
        <span className="text-base">$</span>
      </div>
    </div>
  );
}
