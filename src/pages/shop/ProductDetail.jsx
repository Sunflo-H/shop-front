import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useFavorites from "../../hooks/useFavorites";
import Swal from "sweetalert2";
import SizeOption from "../../components/product/SizeOption";
import ColorOption from "../../components/product/ColorOption";
import { useSelector } from "react-redux";

const DEFAULT_SIZE = "S";
const DEFAULT_COLOR = "Black";

export default function ProductDetail() {
  const user = useSelector((state) => state.auth.user);
  const { uid } = user ?? {};

  const { addCart } = useCart();
  const {
    state: { product },
  } = useLocation();
  const { id, title, imageUrl, price, description, size, color, category } =
    product;

  const [currentSize, setCurrentSize] = useState(DEFAULT_SIZE);
  const [currentColor, setCurrentColor] = useState(DEFAULT_COLOR);

  const { isFavorite, updateFavorites } = useFavorites(product);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddCartClick = (e) => {
    if (user) {
      // navigate로 가져온 'product'의 옵션(size,color)을 변경할 수 있습니다.
      // 그렇기 때문에 product를 바로 addCart 하면 안됩니다.
      // 변경된 옵션 정보를 가지고 있는 product를 addCart 해야합니다.
      const product = {
        id,
        title,
        imageUrl,
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
    <section className=" px-4 md:px-20 pt-20">
      <div
        className="flex flex-col lg:flex-row w-full justify-center m-auto max-w-screen-2xl 
                      gap-0 md:gap-20 "
      >
        <div className="w-full basis-4/12">
          <div className="text-xl ml-2 mb-4">
            <Link to="/"> Home </Link> /{" "}
            <Link to={`/products/${category}`} state={category}>
              {category}
            </Link>
          </div>
          <img src={imageUrl} alt="" className="w-full" />
        </div>
        <div className="w-full basis-4/12 pt-14 ">
          <div className="text-2xl font-bold">{title}</div>
          <div className="font-bold py-2 text-xl">$ {price}</div>
          <div className="py-2">{description}</div>
          <div className="py-2">
            <div className="w-full ">
              <SizeOption
                sizeList={size}
                currentSize={currentSize}
                onChange={handleSizeChange}
              />
              <ColorOption
                colorList={color}
                currentColor={currentColor}
                onChange={handleColorChange}
              />
            </div>
            <div className="flex items-center my-10 gap-4">
              <div
                className="block w-full bg-black m-auto py-3 text-white text-xl font-bold text-center cursor-pointer"
                onClick={handleAddCartClick}
              >
                Add Cart
              </div>
              <div className="flex items-center px-10 py-3 border border-black">
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
