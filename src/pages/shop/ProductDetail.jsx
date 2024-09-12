import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useFavorites from "../../hooks/useFavorites";
import ColorOption from "../../components/shop/main/product/ColorOption";
import Cautions from "../../components/shop/main/product/Cautions";
import Description from "../../components/shop/main/product/Description";
import SizeSelectBox from "../../components/shop/main/product/SizeSelectBox";
import { IKImage } from "imagekitio-react";
import Quantity from "../../components/shop/main/product/Quantity";
import AddBagBtn from "../../components/shop/main/product/AddBagBtn";

const IMAGEKIT_ENDPOINT = process.env.REACT_APP_IMAGEKIT_ENDPOINT;

export default function ProductDetail() {
  const {
    state: { product },
  } = useLocation();
  const { _id, name, image, price, description, size, color, category } =
    product;
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(color[0]);
  const [quantity, setQuantity] = useState(1);
  // const { isFavorite, updateFavorites } = useFavorites(product);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [_id]);

  const handleSizeChange = (selectedOption) => {
    setSelectedSize(selectedOption.value);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  // const handleFavoriteClick = (e) => {
  //   updateFavorites.mutate();
  // };

  return (
    <section className="px-4 md:px-0 pt-28 pb-10">
      <div
        className="flex flex-col gap-0 justify-center m-auto max-w-screen-2xl 
        lg:flex-row md:gap-16 "
      >
        <div className=" w-5/12 ">
          <div className="flex text-[12px] ml-2 mb-4 gap-1">
            <Link to="/" className="h-4 font-bold border-b border-black ">
              Home
            </Link>
            /
            <Link
              to={`/products/${category}`}
              state={category}
              className="h-4 font-bold border-b border-black"
            >
              {category}
            </Link>
          </div>
          <IKImage
            urlEndpoint={IMAGEKIT_ENDPOINT}
            path={getImage(image)}
            width={640}
            height={960}
            transformation={[{ width: 640, height: 960 }]}
            loading="lazy"
            alt={name}
            className={`m-auto`}
            lqip={{ active: true, quality: 10 }} // 로딩이 완료되기 전에 흐린 이미지를 보여준다.
          />
        </div>
        <div className=" w-[344px] pt-8 ">
          <div className="text-[20px] text-gray-600">{name}</div>
          <div className="product-detail-font mt-4 pb-2 text-2xl ">
            <span className=" mr-2">KRW</span>
            {price}
          </div>

          <div className="py-2">
            <div className="w-full ">
              <ColorOption
                colorList={color}
                selectedColor={selectedColor}
                onChange={handleColorChange}
              />
              <SizeSelectBox
                sizeList={size}
                selectedSize={selectedSize}
                onChange={handleSizeChange}
              />
            </div>
            <div className="mt-6 border-t border-gray-400">
              <Description description={description} />
              <Cautions />
            </div>

            <Quantity quantity={quantity} setQuantity={setQuantity} />
            <div className="flex items-center my-10 gap-4">
              <AddBagBtn
                productId={_id}
                selectedColor={selectedColor}
                selectedSize={selectedSize}
                quantity={quantity}
              />
              {/* <div className="flex items-center px-8 py-3 border border-black rounded-md cursor-pointer">
                {isFavorite ? (
                  <AiFillHeart
                    className={`text-2xl   ${isFavorite && "text-red-600"}`}
                    onClick={handleFavoriteClick}
                  />
                ) : (
                  <AiOutlineHeart
                    className={`text-2xl  ${isFavorite && "text-rose-500"}`}
                    onClick={handleFavoriteClick}
                  />
                )}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
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
