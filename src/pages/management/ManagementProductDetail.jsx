import React from "react";
import UpdateAndExitBtn from "../../components/management/main/ManagementProductDetail/UpdateAndExitBtn";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const URL = process.env.REACT_APP_GET_PRODUCT_URL;

const fetchProduct = async (id) => {
  const { data } = await axios.get(URL + "/" + id);
  return data;
};

export default function ManagementProductDetail() {
  const location = useLocation();

  const id = location.pathname.split("/")[4];

  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    enabled: !!id, // `id`가 있을 때만 쿼리를 실행 // '!id' id가 false, '!!id' id가 true
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  let { name, price, category, size, color, image, description } = product;

  size = size.join(",");
  color = color.join(",");

  return (
    <div className="h-screen bg-lightblue manage-font">
      <div className="max-w-screen-lg w-screen m-auto pt-6">
        <div>
          {/* 상단 컨텐츠 */}
          <section className="flex gap-6">
            <div className="w-1/2">
              {/* 좌측 상단 첫번째 컨텐츠 : 상품명, 가격 */}
              <section className="bg-white rounded-md shadow-md p-2">
                <div className=" py-4 px-4">
                  <div className="font-bold">Name</div>
                  <div className="grow text-start border-b mt-1">{name}</div>
                </div>
                <div className=" py-4 px-4">
                  <div className="font-bold">Price</div>
                  <div className="flex border-b mt-1 ">{price}</div>
                </div>
              </section>
              {/* 좌측 상단 두번째 컨텐츠 : 카테고리, 사이즈, 컬러 */}
              <section className="bg-white  mt-4 rounded-md shadow-md p-2">
                {/* 카테고리 */}
                <div className="py-4 px-4">
                  <div className="font-bold">Category</div>
                  <div className="mt-1 border-b">{category}</div>
                </div>
                {/* 사이즈 */}
                <div className="py-4 px-4">
                  <div className="font-bold">Size</div>
                  <div className="mt-1 border-b">{size}</div>
                </div>
                {/* 컬러 */}
                <div className="py-4 px-4">
                  <div className="font-bold">Color</div>
                  <div className="mt-1 border-b">{color}</div>
                </div>
              </section>
            </div>

            {/* 우측 상단 컨텐츠 : 이미지 */}
            <section className="flex flex-col w-1/2 h-[472px] bg-white rounded-md p-2 shadow-md">
              <div className="flex px-4 py-4">
                <div className="font-bold">Image</div>
              </div>
              <div className="grow mx-4 mb-4 h-full">
                <img
                  src={image}
                  className="rounded-md w-[452.19px] h-[384px]"
                />
              </div>
            </section>
          </section>
          {/* 하단 컨텐츠 : 상품 설명 */}
          <section className="bg-white mt-4 rounded-md shadow-md">
            <div className="py-4 px-4">
              <div className="font-bold">Description</div>
              <div className="flex mt-1 border-b">{description}</div>
            </div>
          </section>
          <UpdateAndExitBtn id={id} />
        </div>
      </div>
    </div>
  );
}
