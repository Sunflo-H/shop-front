import React from "react";
import EmptyProduct from "../error/EmptyProduct";
import { useQuery } from "@tanstack/react-query";
import { getProductsByIdList } from "../../api/productApi";
import Payment from "../../components/shop/main/shoppingbag/Payment";
import ProductsInCart from "../../components/shop/main/shoppingbag/ProductsInCart";

export default function Cart() {
  const { data: user } = useQuery({ queryKey: ["loginedUser"] });

  const { cartList } = user ?? []; // cartList = {_id, size, color, quantity}

  const idList = cartList?.map((cart) => cart._id);

  const { data: productsInCart, isLoading } = useQuery({
    queryKey: ["cart", idList],
    queryFn: () => getProductsByIdList(idList),
    enabled: !!idList,
  });

  if (isLoading) return <div>isLoading...</div>;

  return (
    <div className="px-4 pt-20 pb-10 bg-gray-50 ">
      {!cartList || cartList?.length === 0 ? (
        <EmptyProduct />
      ) : (
        <div className="flex flex-col md:flex-row max-w-screen-lg m-auto gap-6 mt-12">
          <ProductsInCart productsInCart={productsInCart} cartList={cartList} />
          <Payment productsInCart={productsInCart} cartList={cartList} />
        </div>
      )}
    </div>
  );
}
