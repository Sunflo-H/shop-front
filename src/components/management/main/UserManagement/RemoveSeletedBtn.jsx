import React from "react";

import { alert_deleteProduct } from "../../../../alerts/warning";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { setIsSelectMode } from "../../../../slice/management/userManagementSlice";
import { deleteProducts } from "../../../../api/userApi";

export default function RemoveSelectedBtn() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { isSelectMode, idList } = useSelector((state) => state.userManagement);
  const mutation = useMutation({
    mutationFn: deleteProducts,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleRemoveClick = () => {
    alert_deleteProduct().then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        mutation.mutate(idList);
        dispatch(setIsSelectMode(false));
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
