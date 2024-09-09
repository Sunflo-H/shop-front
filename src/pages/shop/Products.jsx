import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/shop/main/product/ProductCard";

export default function Products() {
  const { category } = useParams();

  const {
    productsQuery: { data: productList },
  } = useProducts(category);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <section className="pt-24">
      <div
        className={`grid grid-cols-2 mx-4  max-w-screen-xl gap-10
        md:grid-cols-3 md:m-auto`}
      >
        {productList &&
          productList.map((product, i) => {
            return (
              <ProductCard
                product={product}
                currentCategory={category}
                key={product._id}
              />
            );
          })}
      </div>
    </section>
  );
}
