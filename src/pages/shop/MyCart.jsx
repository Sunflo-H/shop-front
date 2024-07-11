import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaEquals } from "react-icons/fa";
import CartItem from "../../components/shop/main/cart/CartItem";
import PriceCard from "../../components/shop/main/cart/PriceCard";
import useCart from "../../hooks/useCart";
import EmptyProduct from "../../components/error/EmptyProduct";
import Swal from "sweetalert2";

const DELIVERY_FEE = 3;

export default function MyCart() {
  const {
    cartQuery: { data: products },
  } = useCart();

  const allPrice = () => {
    return (
      products &&
      products.reduce((acc, cur) => acc + Number(cur.price) * cur.quantity, 0)
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
      {!products || products?.length === 0 ? (
        <EmptyProduct />
      ) : (
        <>
          <div className="px-5 max-w-screen-2xl m-auto">
            {products &&
              products.map((product, i) => (
                <CartItem product={product} key={i} />
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
