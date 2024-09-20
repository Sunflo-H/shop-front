import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProductsByIdList } from "../../../../api/productApi";
import ShoppingBagItemList from "./ShoppingBagItemList";

export default function ProductsInBag({ productsInCart, cartList }) {
  return (
    <div className="bg-white w-full md:w-3/5 shadow-md ">
      <div className="flex justify-between border-t border-gray-300 py-3 px-3 font-bold text-sm">
        SHIP TO HOME <div>({productsInCart.length} items)</div>
      </div>
      <div className="flex justify-between font-semibold text-xs border-t border-gray-300 py-1 px-3">
        <div>ITEM</div>
        <div className="flex">
          <div className="mr-16">QTY</div>
          <div className="w-32 text-end">PIRCE</div>
        </div>
      </div>

      <ShoppingBagItemList products={productsInCart} cartList={cartList} />
    </div>
  );
}
