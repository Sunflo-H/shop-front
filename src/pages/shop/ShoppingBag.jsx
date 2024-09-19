import React, { useEffect } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaEquals } from "react-icons/fa";
import CartItem from "../../components/shop/main/cart/CartItem";
import PriceCard from "../../components/shop/main/cart/PriceCard";
import EmptyProduct from "../error/EmptyProduct";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

import { getProductsByIdList } from "../../api/productApi";
import { formatPrice } from "../../utils/converter";

// const DELIVERY_FEE = 3;
const SHIPPING_FEE = 5000;

export default function ShoppingBag() {
  const { data: user } = useQuery({ queryKey: ["loginedUser"] });
  const { cartList } = user ?? [];
  const idList = user ? cartList.map((cart) => cart._id) : null;

  const { data: productsInCart, refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getProductsByIdList(idList),
    enabled: false,
  });

  const allPrice = () => {
    return (
      productsInCart &&
      productsInCart.reduce(
        (acc, cur) => acc + Number(cur.price) * cur.quantity,
        0
      )
    );
  };

  const handleCheckOutClick = () => {
    Swal.fire({
      icon: "success",
      title: "CHECK OUT",
      confirmButtonColor: "#222",
    });
  };

  useEffect(() => {
    if (idList) {
      console.log("idList가 있다.");
      refetch();
    }
  }, [idList]);

  return (
    <div className="px-4 pt-20 pb-10 bg-gray-50 ">
      {!productsInCart || productsInCart?.length === 0 ? (
        <EmptyProduct />
      ) : (
        <div className="flex flex-col md:flex-row max-w-screen-lg m-auto gap-6 mt-12">
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

            {productsInCart &&
              productsInCart.map((product, i) => {
                const equalProduct = cartList.find(
                  (cartProduct) => cartProduct._id === product._id
                );
                return (
                  <CartItem
                    product={product}
                    selectedSize={equalProduct.size}
                    selectedColor={equalProduct.color}
                    quantity={equalProduct.quantity}
                    key={i}
                  />
                );
              })}
          </div>
          <div className="bg-white w-2/5 h-full shadow-sm border-t border-gray-300 pt-6 pb-4">
            <div className="flex justify-between  px-4">
              <div className="text-sm font-semibold">Items Subtotal</div>
              <div className="text-sm font-semibold">KRW 373,839</div>
            </div>
            <div className="flex justify-between mt-4  px-4 text-gray-500">
              <div className="text-sm font-semibold ">Shipping Fee</div>
              <div className="text-sm font-semibold">
                KRW {formatPrice(SHIPPING_FEE)}
              </div>
            </div>
            <div className="flex justify-between mt-4 px-4 py-4 border-t border-gray-300">
              <div className="text-basic font-bold">Total Price</div>
              <div className="text-basic font-bold">KRW 373,839</div>
            </div>
            <div className="bg-black text-white mt-2 py-2 mx-4 text-center font-bold cursor-pointer">
              CHECKOUT NOW
            </div>
          </div>
        </div>
      )}
      {/* {productsInCart &&
            productsInCart.map((product, i) => (
              <CartItem
                product={product}
                selectedSize={cartList[i].selectedSize}
                selectedColor={cartList[i].selectedColor}
                quantity={cartList[i].quantity}
                key={i}
              />
            ))}

          <div className="flex justify-around border-t mt-10 py-4 bg-gray-100">
            <PriceCard title="Product total" price={allPrice()} />
            <div className="py-7">
              <AiFillPlusCircle className="text-xl" />
            </div>
            <PriceCard title="Shipping cost" price={DELIVERY_FEE} />

            <div className="py-7">
              <FaEquals className="text-xl" />
            </div>
            <PriceCard title="Total price" price={allPrice() + DELIVERY_FEE} />
          </div>

          <div className="bg-black text-center py-1 mt-10 mb-20 cursor-pointer">
            <div
              className="text-white font-bold py-2"
              onClick={handleCheckOutClick}
            >
              CHECK OUT
            </div>
          </div> */}
    </div>
  );
}
