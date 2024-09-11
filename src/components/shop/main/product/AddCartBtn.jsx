import React from "react";
import { useSelector } from "react-redux";
import useCart from "../../../../hooks/useCart";
import Swal from "sweetalert2";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addCart, updateUser } from "../../../../api/userApi";

export default function AddCartBtn({
  productId,
  selectedColor,
  selectedSize,
  quantity,
}) {
  const queryClient = useQueryClient();

  const { isLogined } = useSelector((state) => state.auth);
  const { data: user } = useQuery({ queryKey: ["user"] });
  // const { addCart } = useCart();
  // const { _id } = user ?? {};
  //! 장바구니에 담기 누르면
  //! mutation으로 ["user"]의 값을 변경해야지
  //! cartList 변경해

  const mutation = useMutation({
    mutationFn: addCart,
    onSuccess: (data) => {
      queryClient.invalidateQueries("user");
    },
  });

  const handleAddCartClick = (e) => {
    if (isLogined) {
      const productToAddCart = {
        _id: productId,
        size: selectedSize,
        color: selectedColor,
        quantity,
      };

      mutation.mutate({ userId: user._id, productToAddCart });

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
      className="block w-full bg-black py-3 text-white text-xl font-bold text-center cursor-pointer rounded-md select-none"
      onClick={handleAddCartClick}
    >
      Add Cart
    </div>
  );
}
