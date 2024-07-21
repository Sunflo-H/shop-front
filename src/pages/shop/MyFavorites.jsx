import React from "react";
import useFavorites from "../../hooks/useFavorites";
import { useEffect } from "react";
import EmptyProduct from "../../pages/error/EmptyProduct";
import ProductCard from "../../components/product/ProductCard";

export default function MyFavorites() {
  const {
    favoriteQuery: { data: favoriteProduct },
  } = useFavorites();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 px-4">
      <div className="text-center py-2 px-4 border-b">
        <span className="text-xl font-bold">My Favorites</span>
      </div>
      {!favoriteProduct || favoriteProduct?.length === 0 ? (
        <EmptyProduct />
      ) : (
        <div
          className={`grid grid-cols-2 md:grid-cols-3 mt-8
        max-w-screen-2xl m-auto px-10 gap-5`}
        >
          {favoriteProduct?.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}
