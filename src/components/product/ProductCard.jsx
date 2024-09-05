import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import useFavorites from "../../hooks/useFavorites";
import { IKImage } from "imagekitio-react";

const IMAGEKIT_ENDPOINT = process.env.REACT_APP_IMAGEKIT_ENDPOINT;

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
        <IKImage
          urlEndpoint={IMAGEKIT_ENDPOINT}
          path={getImage(image)}
          transformation={[{ height: 600, width: 400 }]}
          loading="lazy"
          height="600"
          width="400"
          alt={name}
        />
        {/* <img src={`${IMAGEKIT_ENDPOINT}${getImage(image)}`} /> */}
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

/**
 * aws s3 image url에서 맨뒤 image파일명만 추출하는 함수
 * @param {*} imageUrl aws s3 image url
 * @returns image filename
 */
function getImage(imageUrl) {
  const imageUrlSplit = imageUrl.split("/");
  const length = imageUrlSplit.length;
  const image = imageUrlSplit[length - 1];

  return image;
}
