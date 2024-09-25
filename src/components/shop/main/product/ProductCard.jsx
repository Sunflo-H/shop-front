import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import useFavorites from "../../../../hooks/useFavorites";
import { IKImage } from "imagekitio-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../../../../api/userApi";

import { formatImage } from "../../../../utils/converter";

const IMAGEKIT_ENDPOINT = process.env.REACT_APP_IMAGEKIT_ENDPOINT;

export default function ProductCard({ product, currentCategory }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { name, image, category, price, _id } = product;

  const [isFavorite, setIsFavorite] = useState(false);
  const { data: user } = useQuery({ queryKey: ["loginedUser"] });
  const { favoriteList } = user ?? {};

  useEffect(() => {
    if (user) {
      if (favoriteList.find((item) => item._id === _id)) setIsFavorite(true);
    }
  }, [user]);

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries("loginedUser");
    },
  });

  const handleProductClick = () => {
    navigate(`/products/${category}/${_id}`, { state: { product } });
  };

  const handleFavoritesClick = () => {
    const isInFavoriteList = favoriteList.find((item) => item._id === _id);
    let newFavoriteList;

    if (isInFavoriteList) {
      // 있으면 list에서 제거
      newFavoriteList = favoriteList.filter((item) => item._id !== _id);
      setIsFavorite(false);
    } else {
      // 없으면 list에 추가
      newFavoriteList = [...favoriteList, { _id }];
      setIsFavorite(true);
    }

    const userToUpdate = { ...user, favoriteList: newFavoriteList };
    mutation.mutate(userToUpdate);
  };

  return (
    <div className="flex flex-col ">
      <div className="w-full cursor-pointer grow" onClick={handleProductClick}>
        <IKImage
          urlEndpoint={IMAGEKIT_ENDPOINT}
          path={formatImage(image)}
          width={400}
          height={600}
          transformation={[{ width: 400, height: 600 }]}
          loading="lazy"
          alt={name}
          className={`m-auto`}
          lqip={{ active: true, quality: 20 }} // 로딩이 완료되기 전에 흐린 이미지를 보여준다.
        />
      </div>
      <div className="flex justify-between mt-2">
        <div className="font-bold">{name}</div>{" "}
        {isFavorite ? (
          <AiFillHeart
            className={`text-2xl cursor-pointer `}
            onClick={handleFavoritesClick}
          />
        ) : (
          <AiOutlineHeart
            className={`text-2xl cursor-pointer `}
            onClick={handleFavoritesClick}
          />
        )}
      </div>
      <div className="text-lg font-semibold text-gray-600">
        {price}
        <span className="text-base ml-1">$</span>
      </div>
    </div>
  );
}
