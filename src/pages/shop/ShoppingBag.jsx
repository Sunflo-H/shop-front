import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaEquals } from "react-icons/fa";
import CartItem from "../../components/shop/main/cart/CartItem";
import PriceCard from "../../components/shop/main/cart/PriceCard";
import useCart from "../../hooks/useCart";
import EmptyProduct from "../error/EmptyProduct";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const DELIVERY_FEE = 3;

export default function ShoppingBag() {
  const { data: user } = useQuery({ queryKey: ["loginedUser"] });

  const { cartList } = user ?? [];
  const idList = cartList?.map((cart) => cart._id);

  const { data: productsInCart } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await axios.post(
        "http://localhost:8080/api/product/cart",
        idList
      );
      return response.data;
    },
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

  return (
    <div className="px-4 pt-20 ">
      <div className="text-center py-2 px-4 border-b">
        <span className="text-xl font-bold">My Cart</span>
      </div>
      {!productsInCart || productsInCart?.length === 0 ? (
        <EmptyProduct />
      ) : (
        <>
          <div className="px-5 max-w-screen-2xl m-auto">
            {productsInCart &&
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
              <PriceCard
                title="Total price"
                price={allPrice() + DELIVERY_FEE}
              />
            </div>

            <div className="bg-black text-center py-1 mt-10 mb-20 cursor-pointer">
              <div
                className="text-white font-bold py-2"
                onClick={handleCheckOutClick}
              >
                CHECK OUT
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
