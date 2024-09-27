import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setPrevPage } from "../../../../slice/management/productManagementSlice";
import { deleteProducts } from "../../../../api/productApi";
import { alert_deleteProduct } from "../../../../alerts/warning";
import { useDispatch } from "react-redux";
import { alert_deleteSuccess } from "../../../../alerts/success";
import { FaTrash } from "react-icons/fa";

export default function RemoveBtn({ products, productId }) {
  const dispatch = useDispatch();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteProducts,
    onSuccess: (deletedProductCount) => {
      queryClient.invalidateQueries("productManagement");
      if (deletedProductCount === products.length) dispatch(setPrevPage());
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const handleRemoveClick = () => {
    alert_deleteProduct().then((result) => {
      if (result.isConfirmed) {
        alert_deleteSuccess();
        mutation.mutate([productId]);
      }
    });
  };
  return (
    <FaTrash
      className="cursor-pointer text-deepblue hover:text-red-500"
      onClick={handleRemoveClick}
    />
  );
}
