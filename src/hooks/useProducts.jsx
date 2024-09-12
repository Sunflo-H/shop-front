import {
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  getProduct,
  getProduct_all,
  uploadProductToFirebase,
} from "../api/firebase_db";
import { fetchProducts, getProducts } from "../api/productApi";

const SEC = 1000;
/**
 * 상품 정보를 불러오거나, 새 상품을 등록하는 훅
 */
export default function useProducts(category) {
  const queryClient = useQueryClient();

  // 상품 정보를 불러온다.
  const productsQuery = useQuery({
    queryKey: ["products", category],
    queryFn: async () => getProducts(category),
    staleTime: SEC * 60,
  });

  // const productsQuery_all = useQuery({
  //   queryKey: ["products", "all"],
  //   queryFn: async () => getProduct_all(),
  //   staleTime: SEC * 60,
  // });

  // 새 상품을 등록한다. 업데이트가 되어야 하므로 Mutate를 사용한다.

  // const uploadProduct = useMutation({
  //   mutationFn: ({ productToUpload }) =>
  //     uploadProductToFirebase(productToUpload),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["products", category]);
  //   },
  // });

  // AI코드
  // 상품의 URL을 불러온다.
  // const productsQueries = useQueries({
  //   queries: [
  //     { queryKey: ["products", "Men"], queryFn: async () => getProduct("Men") },
  //     {
  //       queryKey: ["products", "Women"],
  //       queryFn: async () => getProduct("Women"),
  //     },
  //   ],

  //   staleTime: SEC * 60,
  // });

  let productData = {
    productsQuery,
    // uploadProduct,
    // productsQuery_all,
    // productsQueries,
  };

  return productData;
}
