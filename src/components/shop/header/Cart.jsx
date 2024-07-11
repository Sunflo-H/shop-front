import React, { useState } from "react";
import { BsBag, BsBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";

export default function Cart() {
  const [isHover, setIsHover] = useState(false);
  const {
    cartQuery: { data: productsInCart },
  } = useCart();

  return (
    <Link
      className="absolute right-5 md:static flex h-full pt-5 pb-4 border-b-2 border-transparent hover:border-black"
      to="/carts"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover ? (
        <BsBagFill className="text-lg mr-1" />
      ) : (
        <BsBag className="text-lg mr-1 " />
      )}

      {productsInCart && (
        <span className="hidden md:inline text-sm font-normal ">
          $
          {productsInCart.reduce(
            (acc, cur) => acc + Number(cur.price * cur.quantity),
            0
          )}
        </span>
      )}
    </Link>
  );
}
