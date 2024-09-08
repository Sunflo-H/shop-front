import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useFavorites from "../../hooks/useFavorites";
import Swal from "sweetalert2";
import ColorOption from "../../components/product/ColorOption";
import { useSelector } from "react-redux";
import SizeSelectBox from "../../components/product/SizeSelectBox";
import Cautions from "../../components/shop/main/product/Cautions";
import Description from "../../components/shop/main/product/Description";

// 각 경고당 타이틀, 서브타이틀, 인포[] 가 필요해
export default function ProductDetail() {
  const user = useSelector((state) => state.auth.user);
  const { uid } = user ?? {};

  const { addCart } = useCart();
  const {
    state: { product },
  } = useLocation();
  const { id, name, image, price, description, size, color, category } =
    product;

  const [currentSize, setCurrentSize] = useState(null);
  const [currentColor, setCurrentColor] = useState(color[0]);

  const { isFavorite, updateFavorites } = useFavorites(product);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddCartClick = (e) => {
    if (user) {
      // 장바구니에 담을 때 'product'의 옵션(size,color)을 변경할 수 있습니다.
      // 그렇기 때문에 product를 바로 addCart 하면 안됩니다.
      // 변경된 옵션 정보를 가지고 있는 product를 addCart 해야합니다.
      const product = {
        id,
        name,
        image,
        price,
        size: currentSize, // 옵션 SIZE
        color: currentColor, // 옵션 COLOR
        quantity: 1, // 옵션 개수
      };

      addCart.mutate({ product, uid });

      Swal.fire({
        icon: "success",
        title: "Added",
        confirmButtonColor: "#222",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Sign in first!",
        confirmButtonColor: "#222",
      });
    }
  };

  const handleSizeChange = (e) => {
    setCurrentSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setCurrentColor(e.target.value);
  };

  const handleFavoriteClick = (e) => {
    updateFavorites.mutate();
  };

  return (
    <section className="px-4 md:px-0 pt-28">
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
          <img src={image} alt="" className="w-full" />
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
                currentColor={currentColor}
                onChange={handleColorChange}
              />
              <SizeSelectBox
                sizeList={size}
                currentSize={currentSize}
                onChange={handleSizeChange}
              />
            </div>
            <div className="mt-6 border-t border-gray-400">
              <Description description={description} />
              <Cautions />
            </div>
            <div className="flex items-center my-10 gap-4">
              <div
                className="block w-full bg-black py-3 text-white text-xl font-bold text-center cursor-pointer"
                onClick={handleAddCartClick}
              >
                Add Cart
              </div>
              <div className="flex items-center px-8 py-3 border border-black">
                {isFavorite ? (
                  <AiFillHeart
                    className={`text-2xl  cursor-pointer ${
                      isFavorite && "text-red-600"
                    }`}
                    onClick={handleFavoriteClick}
                  />
                ) : (
                  <AiOutlineHeart
                    className={`text-2xl  cursor-pointer ${
                      isFavorite && "text-rose-500"
                    }`}
                    onClick={handleFavoriteClick}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
