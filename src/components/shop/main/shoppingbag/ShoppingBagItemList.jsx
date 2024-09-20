import React from "react";
import ShoppingBagItem from "./ShoppingBagItem";

export default function ShoppingBagItemList({ products, cartList }) {
  return (
    <div>
      {products &&
        products.map((product, i) => {
          const equalProduct = cartList.find(
            (cartProduct) => cartProduct._id === product._id
          );
          return (
            <ShoppingBagItem
              product={product}
              selectedSize={equalProduct.size}
              selectedColor={equalProduct.color}
              quantity={equalProduct.quantity}
              key={product._id}
            />
          );
        })}
    </div>
  );
}
