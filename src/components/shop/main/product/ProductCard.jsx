import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import useFavorites from "../../../../hooks/useFavorites";
import { IKImage } from "imagekitio-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../../../../api/userApi";

const IMAGEKIT_ENDPOINT = process.env.REACT_APP_IMAGEKIT_ENDPOINT;

export default function ProductCard({ product, currentCategory }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { name, image, category, price, _id } = product;

  const [isFavorite, setIsFavorite] = useState(false);
  const { data: user } = useQuery({ queryKey: ["loginedUser"] });

  useEffect(() => {
    if (user?.favoriteList.find((item) => item._id === _id))
      setIsFavorite(true);
  }, [user]);

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries("loginedUser");
    },
  });

  const handleProductClick = () => {
    navigate(`/products/${category}/${_id}`, { state: { product } });
  };

  const handleFavoritesClick = () => {
    const isInFavoriteList = user.favoriteList.find((item) => item._id === _id);
    let newFavoriteList;

    if (isInFavoriteList) {
      // 있으면 list에서 제거
      newFavoriteList = user.favoriteList.filter((item) => item._id !== _id);
      setIsFavorite(false);
    } else {
      // 없으면 list에 추가
      newFavoriteList = [...user.favoriteList, { _id }];
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
          path={getImage(image)}
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
        <AiFillHeart
          className={`text-2xl cursor-pointer ${isFavorite && "text-rose-500"}`}
          onClick={handleFavoritesClick}
        />
      </div>
      <div className="text-lg font-semibold text-gray-600">
        {price}
        <span className="text-base ml-1">$</span>
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
