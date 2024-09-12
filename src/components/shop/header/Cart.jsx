import React, { useState } from "react";
import { BsBag, BsBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import useCart from "../../../hooks/useCart";

export default function Cart() {
  const [isHover, setIsHover] = useState(false);
  //! 나중에 useCart 코드 필요없는건 삭제하기 위해 일단 냅둬
  // const {
  //   cartQuery: { data: productsInCart },
  // } = useCart();

  return (
    <Link
      className="absolute right-5 md:static h-full content-center text-center pt-2 border-b-2 border-b-transparent hover:border-b-black"
      to="/carts"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover ? (
        <BsBagFill className="text-xl " />
      ) : (
        <BsBag className="text-xl " />
      )}
    </Link>
  );
}
