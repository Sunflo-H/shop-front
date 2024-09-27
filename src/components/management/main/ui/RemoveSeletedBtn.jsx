import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllCheckBox,
  setIsSelectMode,
  setPage,
  setPrevPage,
} from "../../../../slice/management/productManagementSlice";
import { alert_deleteProduct } from "../../../../alerts/warning";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProducts } from "../../../../api/productApi";
import { alert_DeleteSelectedProductsSuccess } from "../../../../alerts/success";

export default function RemoveSelectedBtn({ products }) {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { isSelectMode, idList } = useSelector(
    (state) => state.productManagement
  );

  const mutation = useMutation({
    mutationFn: deleteProducts,
    onSuccess: (deletedProductCount) => {
      queryClient.invalidateQueries("productManagement");
      if (deletedProductCount === products.length || !products)
        dispatch(setPrevPage());
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleRemoveClick = () => {
    alert_deleteProduct().then((result) => {
      if (result.isConfirmed) {
        alert_DeleteSelectedProductsSuccess();
        mutation.mutate(idList);
        dispatch(setIsSelectMode(false));
        dispatch(setAllCheckBox(false));
      }
    });
  };
  return (
    <div
      className={` inline-flex items-center px-4 py-2 mt-3 gap-2
       bg-red-500 text-white rounded-md cursor-pointer text-md font-bold
       hover:bg-red-600 ${isSelectMode || "hidden"} `}
      onClick={handleRemoveClick}
    >
      <FaTrash />
      Remove Selected
    </div>
  );
}
