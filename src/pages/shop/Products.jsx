import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductCard from "../../components/shop/main/product/ProductCard";
import { getProducts } from "../../api/productApi";
import { useQuery } from "@tanstack/react-query";

const SEC = 1000;

export default function Products() {
  const { category } = useParams();

  // const {
  //   productsQuery: { data: products },
  // } = useProducts(category);
  const { data: products } = useQuery({
    queryKey: ["products", category],
    queryFn: async () => getProducts(category),
    staleTime: SEC * 60,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <section className="pt-32 pb-10">
      <div
        className={`grid grid-cols-2 mx-4  max-w-screen-xl gap-10
        md:grid-cols-3 md:m-auto`}
      >
        {products &&
          products.map((product, i) => {
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
