import React from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useAuthContext } from "../../../../context/AuthContext";
import useCart from "../../../../hooks/useCart";

export default function CartItem({ product }) {
  const { uid } = useAuthContext();
  const { quantityMinus, quantityPlus, removeCart } = useCart();
  const { id, title, imageUrl, price, quantity, size, color } = product;

  const handlePlusBtnClick = () => {
    quantityPlus.mutate({ product, uid });
  };

  const handleMinusBtnClick = () => {
    if (quantity === 1) return;
    quantityMinus.mutate({
      product,
      uid,
    });
  };

  const handleRemoveBtnClick = () => {
    removeCart.mutate({
      product,
      uid,
    });
  };

  return (
    <div className="flex my-2">
      {/* <div className="w-28  md:w-40"> */}
      <img className="w-28 md:w-40 " src={imageUrl} alt="" />
      {/* </div> */}
      <div className="my-auto mx-4">
        <div>
          <div>
            <span className="font-bold md:text-xl">{title}</span>
          </div>
          <div>
            <span className=" font-bold text-sm md:text-base">{size}</span>
          </div>
          <div>
            <span className=" font-bold text-sm md:text-base">{color}</span>
          </div>
          <div>
            <span className="font-bold font-sans text-sm md:text-base">
              ₩{price}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center my-auto ml-auto">
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
        <div className="py-1.5 pl-6">
          <BsFillTrashFill
            className="text-lg cursor-pointer"
            onClick={handleRemoveBtnClick}
          />
        </div>
      </div>
    </div>
  );
}
