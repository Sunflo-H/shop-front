import React from "react";
import useFavorites from "../../hooks/useFavorites";
import { useEffect } from "react";
import EmptyProduct from "../../pages/error/EmptyProduct";
import ProductCard from "../../components/shop/main/product/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProductsByIdList } from "../../api/productApi";

export default function MyFavorites() {
  const { data: user } = useQuery({ queryKey: ["loginedUser"] });
  const { favoriteList } = user ?? {};

  const { data: favoriteProducts, refetch } = useQuery({
    queryKey: ["favoriteProducts"],
    queryFn: () => getProductsByIdList(favoriteList),
    enabled: !!user,
  });

  console.log(favoriteProducts);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    refetch();
  }, [user]);

  return (
    <section className="pt-32 pb-10 px-4">
      {!favoriteList || favoriteList?.length === 0 ? (
        <EmptyProduct />
      ) : (
        <div
          className={`grid grid-cols-2 mx-4 max-w-screen-xl gap-10
        md:grid-cols-3 md:m-auto`}
        >
          {favoriteProducts?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      )}
    </section>
  );
}
