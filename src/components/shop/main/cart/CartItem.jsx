import React from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import useCart from "../../../../hooks/useCart";
import { useSelector } from "react-redux";
import { IKImage } from "imagekitio-react";
import { useMutation } from "@tanstack/react-query";

const IMAGEKIT_ENDPOINT = process.env.REACT_APP_IMAGEKIT_ENDPOINT;
const sizeOptionList = [
  { value: "XX", label: "XX-Small" },
  { value: "XS", label: "X-Small" },
  { value: "S", label: "Small" },
  { value: "M", label: "Medium" },
  { value: "L", label: "Large" },
  { value: "XL", label: "X-Large" },
  { value: "XXL", label: "XX-Large" },
  { value: "2X", label: "2X" },
  { value: "3X", label: "3X" },
];

export default function CartItem({
  product,
  selectedSize,
  selectedColor,
  quantity,
}) {
  // const user = useSelector((state) => state.auth.user);
  // const { uid } = user ?? {};
  // const { quantityMinus, quantityPlus, removeCart } = useCart();
  const { _id, name, image, price } = product;
  console.log(selectedSize, selectedColor);
  const mutation = useMutation({
    mutationFn: (async) => {
      //! quantity 증감 구현 하고 Ec2 작업 시작
    },
  });
  // const handlePlusBtnClick = () => {
  //   quantityPlus.mutate({ product, uid });
  // };

  // const handleMinusBtnClick = () => {
  //   if (quantity === 1) return;
  //   quantityMinus.mutate({
  //     product,
  //     uid,
  //   });
  // };

  // const handleRemoveBtnClick = () => {
  //   removeCart.mutate({
  //     product,
  //     uid,
  //   });
  // };

  return (
    <div className="flex border-t border-gray-300 py-3 px-3">
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

      <div className="mx-4">
        <div>
          <span className="font-bold ">{name}</span>
        </div>
        <div className="mt-2 text-sm">
          Color : <span className="  ">{selectedColor}</span>
        </div>
        <div className="text-sm">
          Size :{" "}
          <span className=" ">
            {
              sizeOptionList.find((option) => option.value === selectedSize)
                .label
            }
          </span>
        </div>

        <div className=" mt-14 text-xs text-gray-400 underline decoration-gray-400 cursor-pointer">
          Remove
        </div>
      </div>
      <div className="flex ml-auto ">
        <div className="py-1.5 ">
          <AiOutlineMinusSquare
            className="md:text-lg cursor-pointer"
            // onClick={handleMinusBtnClick}
          />
        </div>
        <div className="w-12 text-center">
          <span className="md:text-xl font-sans">{quantity}</span>
        </div>
        <div className="py-1.5">
          <AiOutlinePlusSquare
            className="md:text-lg cursor-pointer"
            // onClick={handlePlusBtnClick}
          />
        </div>
      </div>
      {/* <div className="font-bold font-sans text-sm ml-auto">KRW {price}</div> */}
      <div className="font-bold font-sans text-sm text-end ml-auto w-32">
        KRW 300,000
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
