import React from "react";
import useProducts from "../../hooks/useProducts";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const MAX_PRODUCTS_COUNT = 8;

export default function HomeProducts() {
  const currentCategory = useSelector(
    (state) => state.category.currentCategory
  );
  const { productsQuery } = useProducts(currentCategory);
  const products = productsQuery.data?.slice(0, MAX_PRODUCTS_COUNT);
  console.log(products);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 ">
      {products &&
        products.map((product, index) => {
          return (
            <ProductCard
              product={product}
              currentCategory={currentCategory}
              key={index}
            />
          );
        })}
    </div>
  );
}
