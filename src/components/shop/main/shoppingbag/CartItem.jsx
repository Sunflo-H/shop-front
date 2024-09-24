import React from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { IKImage } from "imagekitio-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { formatPrice, formatSize } from "../../../../utils/converter";
import { updateUser } from "../../../../api/userApi";
import { useNavigate } from "react-router-dom";

const IMAGEKIT_ENDPOINT = process.env.REACT_APP_IMAGEKIT_ENDPOINT;

export default function CartItem({ product, cartItem }) {
  const queryClient = useQueryClient();
  const { data: user } = useQuery({ queryKey: ["loginedUser"] });
  const { _id, name, image, price, category } = product;
  const { color, size, quantity } = cartItem;
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries("loginedUser");
    },
  });
  const handlePlusBtnClick = () => {
    const matchedCartItemIndex = user.cartList.findIndex(
      (item) => item._id === _id
    );

    const updatedCartList = [...user.cartList];
    updatedCartList[matchedCartItemIndex] = {
      ...updatedCartList[matchedCartItemIndex],
      quantity: updatedCartList[matchedCartItemIndex].quantity + 1,
    };

    const updatedUser = {
      ...user,
      cartList: [...updatedCartList],
    };

    mutation.mutate(updatedUser);
  };

  const handleMinusBtnClick = () => {
    if (quantity === 1) return;
    const matchedCartItemIndex = user.cartList.findIndex(
      (item) => item._id === _id
    );

    const updatedCartList = [...user.cartList];
    updatedCartList[matchedCartItemIndex] = {
      ...updatedCartList[matchedCartItemIndex],
      quantity: updatedCartList[matchedCartItemIndex].quantity - 1,
    };

    const updatedUser = {
      ...user,
      cartList: [...updatedCartList],
    };

    mutation.mutate(updatedUser);
  };

  const handleRemoveBtnClick = () => {
    const matchedCartItemIndex = user.cartList.findIndex(
      (item) => item._id === _id
    );

    const updatedCartList = [...user.cartList].filter(
      (cartItem, index) => index !== matchedCartItemIndex
    );
    console.log(updatedCartList);

    const updatedUser = {
      ...user,
      cartList: [...updatedCartList],
    };

    mutation.mutate(updatedUser);
  };

  const productClick = () => {
    navigate(`/products/${category}/${_id}`, { state: { product } });
  };

  return (
    <div className="flex border-t border-gray-300 py-3 px-3">
      <div
        className="w-[120px] h-[150px] cursor-pointer"
        onClick={productClick}
      >
        <IKImage
          urlEndpoint={IMAGEKIT_ENDPOINT}
          path={getImage(image)}
          width={120}
          height={150}
          transformation={[{ width: 120, height: 150 }]}
          loading="lazy"
          alt={name}
          lqip={{ active: true, quality: 10 }} // 로딩이 완료되기 전에 흐린 이미지를 보여준다.
        />
      </div>

      <div className="w-[160px] ml-4">
        <div>
          <span className="font-bold ">{name}</span>
        </div>
        <div className="mt-2 text-sm">
          Color : <span className="  ">{color}</span>
        </div>
        <div className="text-sm">
          Size : <span className="">{formatSize(size).label}</span>
        </div>

        <div
          className=" mt-14 text-xs text-gray-400 underline decoration-gray-400 cursor-pointer"
          onClick={handleRemoveBtnClick}
        >
          Remove
        </div>
      </div>
      <div className="flex ml-auto ">
        <div className="py-1.5 ">
          <AiOutlineMinusSquare
            className="md:text-lg cursor-pointer"
            onClick={handleMinusBtnClick}
          />
        </div>
        <div className="w-12 text-center">
          <span className="md:text-xl font-sans">{quantity}</span>
        </div>
        <div className="py-1.5">
          <AiOutlinePlusSquare
            className="md:text-lg cursor-pointer"
            onClick={handlePlusBtnClick}
          />
        </div>
      </div>
      <div className="font-bold font-sans text-sm text-end ml-auto w-32">
        KRW {formatPrice(price)}
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
