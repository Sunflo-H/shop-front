import React from "react";
import Checkout from "./Checkout";
import { formatPrice } from "../../../../utils/converter";

const SHIPPING_FEE = 5000;

export default function Payment({ productsInCart, cartList }) {
  const subtotal = productsInCart.reduce((acc, product) => {
    const { quantity } = cartList.find((item) => item._id === product._id);
    return acc + product.price * quantity;
  }, 0);

  const total = subtotal + SHIPPING_FEE;

  return (
    <div className="bg-white w-2/5 h-full shadow-sm border-t border-gray-300 pt-6 pb-4">
      <div className="flex justify-between  px-4">
        <div className="text-sm font-semibold">Items Subtotal</div>
        <div className="text-sm font-semibold">KRW {subtotal}</div>
      </div>
      <div className="flex justify-between mt-4  px-4 text-gray-500">
        <div className="text-sm font-semibold ">Shipping Fee</div>
        <div className="text-sm font-semibold">
          KRW {formatPrice(SHIPPING_FEE)}
        </div>
      </div>
      <div className="flex justify-between mt-4 px-4 py-4 border-t border-gray-300">
        <div className="text-basic font-bold">Total Price</div>
        <div className="text-basic font-bold">KRW {total}</div>
      </div>
      <Checkout />
    </div>
  );
}
