import React from "react";

import { useSelector } from "react-redux";
import useProducts from "../../../../hooks/useProducts";
import ProductCard from "./ProductCard";

const MAX_PRODUCTS_COUNT = 8;

export default function HomeProducts() {
  const currentCategory = useSelector(
    (state) => state.category.currentCategory
  );
  const { productsQuery } = useProducts(currentCategory);
  const products = productsQuery.data?.slice(0, MAX_PRODUCTS_COUNT);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
