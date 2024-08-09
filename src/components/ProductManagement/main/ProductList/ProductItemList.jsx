import React, { useEffect } from "react";
import ProductListItem from "./ProductListItem";
import { useDispatch, useSelector } from "react-redux";
import ProductListHeader from "./ProductListHeader";
import { fetchProduct } from "../../../../slice/productsManagement/productListSlice";

export default function ProductItemList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productList.products);
  useEffect(() => {
    // dispatch(fetchProduct({ category: "man" }));
    dispatch(fetchProduct(""));
  }, [dispatch]);

  console.log(products);
  // const products = useSelector(
  //   (state) => state.productManagement.products_filtered_final
  // );
  // const viewCount = useSelector((state) => state.pageNation.viewCount);
  // const currentPage = useSelector((state) => state.pageNation.currentPage);
  // const search = useSelector((state) => state.productManagement.search);

  // let productsPerPage = getProductsPerPage(products, currentPage, viewCount);

  // ! products_origin 에서 검색
  // if (search)
  // productsPerPage = products_origin
  //   .filter((product) => product[1].title.includes(search))
  //   .slice(start, last);
  return (
    <div className="mt-4 bg-white">
      <ProductListHeader />
      <ul>
        {products.map((product) => (
          <ProductListItem product={product} key={product._id} />
        ))}
      </ul>
      {/* <ul>
        {productsPerPage?.map((product_KeyValue, index) => (
          <ProductListItem
            product_KeyAndValue={product_KeyValue}
            key={index}
            index={index}
            viewCount={viewCount}
          />
        ))}
      </ul> */}
    </div>
  );
}

/**
 * 전체(또는 필터링된) 상품들에서 현재 페이지에 보여질 상품들을 구하는 함수
 * @param {*} products 모든 상품들
 * @param {*} currentPage 현재 페이지 값
 * @param {*} viewCount 한 페이지에 보여질 상품의 수
 * @returns 현재 페이지에 보여질 상품들
 */
function getProductsPerPage(products, currentPage, viewCount) {
  let start = viewCount * (currentPage - 1);
  let last = viewCount * currentPage;
  let productsPerPage = products.slice(start, last);

  return productsPerPage;
}

// import React from "react";
// import ProductListItem from "./ProductListItem";

// import { useSelector } from "react-redux";
// import ProductListTitle from "./ProductListTitle";

// export default function ProductItemList() {
//   const products_origin = useSelector(
//     (state) => state.productManagement.products_origin
//   );
//   const products = useSelector(
//     (state) => state.productManagement.products_filtered_final
//   );
//   const viewCount = useSelector((state) => state.pageNation.viewCount);
//   const currentPage = useSelector((state) => state.pageNation.currentPage);
//   const search = useSelector((state) => state.productManagement.search);

//   let productsPerPage = getProductsPerPage(products, currentPage, viewCount);

//   // ! products_origin 에서 검색
//   // if (search)
//   // productsPerPage = products_origin
//   //   .filter((product) => product[1].title.includes(search))
//   //   .slice(start, last);
//   return (
//     <div className="mt-4 bg-white">
//       <ProductListTitle />
//       <ul>
//         {productsPerPage?.map((product_KeyValue, index) => (
//           <ProductListItem
//             product_KeyAndValue={product_KeyValue}
//             key={index}
//             index={index}
//             viewCount={viewCount}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

// /**
//  * 전체(또는 필터링된) 상품들에서 현재 페이지에 보여질 상품들을 구하는 함수
//  * @param {*} products 모든 상품들
//  * @param {*} currentPage 현재 페이지 값
//  * @param {*} viewCount 한 페이지에 보여질 상품의 수
//  * @returns 현재 페이지에 보여질 상품들
//  */
// function getProductsPerPage(products, currentPage, viewCount) {
//   let start = viewCount * (currentPage - 1);
//   let last = viewCount * currentPage;
//   let productsPerPage = products.slice(start, last);

//   return productsPerPage;
// }
