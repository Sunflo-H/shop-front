import React from "react";
import { useSelector } from "react-redux";
import useCart from "../../../../hooks/useCart";
import Swal from "sweetalert2";

export default function AddCartBtn({
  productToAddCart,
  selectedColor,
  selectedSize,
}) {
  const { id, name, image, price, description, size, color, category } =
    productToAddCart;
  const user = useSelector((state) => state.auth.user);
  const { addCart } = useCart();
  const { _id } = user ?? {};
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
        size: selectedSize, // 옵션 SIZE
        color: selectedColor, // 옵션 COLOR
        quantity: 1, // 옵션 개수
      };

      addCart.mutate({ product, _id });

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
  return (
    <div
      className="block w-full bg-black py-3 text-white text-xl font-bold text-center cursor-pointer"
      onClick={handleAddCartClick}
    >
      Add Cart
    </div>
  );
}
