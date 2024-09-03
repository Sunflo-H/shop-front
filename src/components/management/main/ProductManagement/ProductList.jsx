import React from "react";
import ProductListItem from "./ProductListItem";
import ProductListHeader from "./ProductListHeader";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProducts } from "../../../../api/productApi";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../../slice/management/productManagementSlice";

export default function ProductList({ products }) {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.productManagement);

  const mutation = useMutation({
    mutationFn: deleteProducts,
    onSuccess: (deleteCount) => {
      queryClient.invalidateQueries("products");
      if (deleteCount === products.length) dispatch(setPage(page - 1));
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return (
    <div className="mt-4 bg-white rounded-md shadow-md border border-gray-300 overflow-hidden">
      <ProductListHeader products={products} />
      <ul>
        {products.map((product, i) => (
          <ProductListItem
            product={product}
            index={i}
            mutation={mutation}
            key={product._id}
          />
        ))}
      </ul>
    </div>
  );
}
