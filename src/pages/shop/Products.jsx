import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductCard from "../../components/shop/main/product/ProductCard";
import { getProducts } from "../../api/productApi";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SEC = 1000;
const getProducts_https_ip = async (
  category,
  status,
  page,
  limit,
  searchQuery
) => {
  if (category === "ALL") category = "";
  if (status === "ALL") status = "";

  try {
    const response = await axios.get("https://13.124.80.0/api/product", {
      params: { category, status, page, limit, searchQuery },
    });
    console.log("https ip 성공:", "https://13.124.80.0/api/product");
    return response.data;
  } catch (err) {
    console.log("https ip 실패");
  }
};
const getProducts_https_domain = async (
  category,
  status,
  page,
  limit,
  searchQuery
) => {
  if (category === "ALL") category = "";
  if (status === "ALL") status = "";

  try {
    const response = await axios.get("https://adonisaws.com/api/product", {
      params: { category, status, page, limit, searchQuery },
    });
    console.log("https domain 성공: https://adonisaws.com/api/product");
    return response.data;
  } catch (err) {
    console.log("https domain 실패");
  }
};
const getProducts_http_ip = async (
  category,
  status,
  page,
  limit,
  searchQuery
) => {
  if (category === "ALL") category = "";
  if (status === "ALL") status = "";

  try {
    const response = await axios.get("http://13.124.80.0/api/product", {
      params: { category, status, page, limit, searchQuery },
    });
    console.log("http ip 성공: http://13.124.80.0/api/product");
    return response.data;
  } catch (err) {
    console.log("http ip 실패");
  }
};
const getProducts_http_domain = async (
  category,
  status,
  page,
  limit,
  searchQuery
) => {
  if (category === "ALL") category = "";
  if (status === "ALL") status = "";

  try {
    const response = await axios.get("http://adonisaws.com/api/product", {
      params: { category, status, page, limit, searchQuery },
    });
    console.log("http domain 성공: http://adonisaws.com/api/product");
    return response.data;
  } catch (err) {
    console.log("http domain 실패");
  }
};
export default function Products() {
  const { category } = useParams();

  const { data: products } = useQuery({
    queryKey: ["products", category],
    queryFn: async () => getProducts(category),
    staleTime: SEC * 60,
  });

  const { data: test_https_ip } = useQuery({
    queryKey: ["products_https_ip", category],
    queryFn: async () => getProducts_https_ip(category),
    staleTime: SEC * 60,
  });

  const { data: test_https_domain } = useQuery({
    queryKey: ["products_https_domain", category],
    queryFn: async () => getProducts_https_domain(category),
    staleTime: SEC * 60,
  });

  const { data: test_http_ip } = useQuery({
    queryKey: ["products_http_ip", category],
    queryFn: async () => getProducts_http_ip(category),
    staleTime: SEC * 60,
  });

  const { data: test_http_domain } = useQuery({
    queryKey: ["products_http_domain", category],
    queryFn: async () => getProducts_http_domain(category),
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
