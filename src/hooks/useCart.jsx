import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCart, removeCartItem, uploadCart } from "../api/firebase_db";
import { useSelector } from "react-redux";

const SEC = 1000;
/**
 * 카트 정보를 불러오고, 새 상품을 등록, 상품의 개수를 증감 하는 훅
 */
export default function useCart() {
  const { _id } = useSelector((state) => state.auth.user) ?? {};
  const queryClient = useQueryClient();

  // 카트 정보를 불러온다.
  const cartQuery = useQuery({
    queryKey: ["cart", _id],
    queryFn: () => getCart(_id),
    staleTime: SEC * 60,
  });

  // 카트에 상품을 추가한다.
  const addCart = useMutation({
    mutationFn: ({ product, _id }) => uploadCart(product, _id),
    onSuccess: () => {
      queryClient.invalidateQueries(["carts", _id]);
    },
  });

  // 카트에 있는 상품의 개수를 증가시킨다.
  const quantityPlus = useMutation({
    mutationFn: ({ product, _id }) =>
      uploadCart({ ...product, quantity: product.quantity + 1 }, _id),

    onSuccess: () => {
      queryClient.invalidateQueries(["carts", _id]);
    },
  });

  // 카트에 있는 상품의 개수를 감소시킨다.
  const quantityMinus = useMutation({
    mutationFn: ({ product, _id }) =>
      uploadCart({ ...product, quantity: product.quantity - 1 }, _id),

    onSuccess: () => {
      queryClient.invalidateQueries(["carts", _id]);
    },
  });

  // 카트에 있는 상품을 삭제한다.
  const removeCart = useMutation({
    mutationFn: ({ product, _id }) => removeCartItem(product, _id),

    onSuccess: () => {
      queryClient.invalidateQueries(["carts", _id]);
    },
  });

  return { cartQuery, quantityMinus, quantityPlus, removeCart, addCart };
}
