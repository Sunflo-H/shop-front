import React from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import useCart from "../../../../hooks/useCart";
import { useSelector } from "react-redux";
import { IKImage } from "imagekitio-react";
import { useMutation } from "@tanstack/react-query";

const IMAGEKIT_ENDPOINT = process.env.REACT_APP_IMAGEKIT_ENDPOINT;
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
    <div className="flex my-2">
      <div className="w-28 md:w-40">
        <IKImage
          urlEndpoint={IMAGEKIT_ENDPOINT}
          path={getImage(image)}
          width={160}
          height={240}
          transformation={[{ width: 160, height: 240 }]}
          loading="lazy"
          alt={name}
          lqip={{ active: true, quality: 10 }} // 로딩이 완료되기 전에 흐린 이미지를 보여준다.
        />
      </div>

      <div className="my-auto mx-4">
        <div>
          <div>
            <span className="font-bold md:text-xl">{name}</span>
          </div>
          <div>
            <span className=" font-bold text-sm md:text-base">
              {selectedSize}
            </span>
          </div>
          <div>
            <span className=" font-bold text-sm md:text-base">
              {selectedColor}
            </span>
          </div>
          <div>
            <span className="font-bold font-sans text-sm md:text-base">
              ₩{price}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center my-auto ml-auto">
        {/* <div className="py-1.5 ">
          <AiOutlineMinusSquare
            className="md:text-lg cursor-pointer"
            onClick={handleMinusBtnClick}
          />
        </div> */}
        <div className="w-12 text-center">
          <span className="md:text-xl font-sans">{quantity}</span>
        </div>
        {/* <div className="py-1.5">
          <AiOutlinePlusSquare
            className="md:text-lg cursor-pointer"
            onClick={handlePlusBtnClick}
          />
        </div> */}
        {/* <div className="py-1.5 pl-6">
          <BsFillTrashFill
            className="text-lg cursor-pointer"
            onClick={handleRemoveBtnClick}
          />
        </div> */}
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
