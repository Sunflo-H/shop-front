import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/product/ProductCard";

export default function Products() {
  const { category } = useParams();

  const {
    productsQuery: { data: productList },
  } = useProducts(category);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <section className="pt-20">
      <div
        className={`grid grid-cols-1 m-auto mt-6 max-w-screen-xl gap-10 border
        md:grid-cols-3`}
      >
        {productList &&
          productList.map((product, index) => {
            return (
              <ProductCard
                product={product}
                currentCategory={category}
                key={index}
              />
            );
          })}
      </div>
    </section>
  );
}

// function getTitleByCategory(category) {
//   return category === "Men" || category === "Women"
//     ? `SHOP ALL ${category.toUpperCase()}'S CLOTHING ` // 카테고리 : 남성, 여성일 때
//     : `The ${category} Shop`; // 카테고리 : 악세사리, 신발일 때
// }
