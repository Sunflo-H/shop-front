import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductCard from "../../components/shop/main/product/ProductCard";
import { getProducts } from "../../api/productApi";
import { useQuery } from "@tanstack/react-query";
import EmptyProduct from "../error/EmptyProduct";

const SEC = 1000;

export default function SearchProducts() {
  const { searchQuery } = useParams();

  const { data: products } = useQuery({
    queryKey: ["products", searchQuery],
    queryFn: async () => getProducts({ searchQuery }),
    staleTime: SEC * 60,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchQuery]);

  return (
    <section className="pt-32 pb-10">
      {!products || products.length === 0 ? (
        <EmptyProduct />
      ) : (
        <div
          className={`grid grid-cols-2 mx-4  max-w-screen-xl gap-10
              md:grid-cols-3 md:m-auto`}
        >
          {products.map((product) => {
            return <ProductCard product={product} key={product._id} />;
          })}
        </div>
      )}
    </section>
  );
}
