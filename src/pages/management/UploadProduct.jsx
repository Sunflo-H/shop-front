import React, { useState } from "react";
import RadioBtn from "../../components/management/main/UploadProduct/RadioBtn";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  resetNewProduct,
  setNewProduct,
} from "../../slice/management/createProductSlice";
import SaveAndCancelBtn from "../../components/management/main/UploadProduct/SaveAndCancelBtn";
import InputFormTitle from "../../components/management/main/ui/InputFormTitle";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadProduct } from "../../api/productApi";
import { alert_productUploadSuccess } from "../../alerts/success";

const category = ["Man", "Woman", "Accessory", "Shoes"];
const requireOptions = ["name", "price", "category", "image"];

export default function UploadProduct() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { newProduct, defaultImage } = useSelector(
    (state) => state.createProduct
  );
  const { image } = newProduct;

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const key = name;
    const value = files[0];
    dispatch(setNewProduct({ key, value }));
    e.target.value = null; // 파일 업로드 후 동일한 이미지를 업로드 할 때 필요한 코드
  };

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    dispatch(setNewProduct({ key, value }));
  };

  const mutation = useMutation({
    mutationFn: uploadProduct,
    onSuccess: async (data) => {
      await alert_productUploadSuccess();
      dispatch(resetNewProduct());
      queryClient.invalidateQueries("products");
    },
    onError: (err) => {
      console.log(err);
    },
  });

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
                  <InputFormTitle title="name" required={true} />
                  <div className="grow text-start border-b mt-1">
                    <input
                      type="text"
                      name="name"
                      className="w-full outline-none"
                      placeholder="ex) Man's Suit"
                      value={useSelector(
                        (state) => state.createProduct.newProduct.name
                      )}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className=" py-4 px-4">
                  <InputFormTitle title="Price" required={true} />
                  <div className="flex border-b mt-1 ">
                    <input
                      type="Number"
                      name="price"
                      className="w-full outline-none"
                      placeholder="100"
                      value={useSelector(
                        (state) => state.createProduct.newProduct.price
                      )}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </section>
              {/* 좌측 상단 두번째 컨텐츠 : 카테고리, 사이즈, 컬러 */}
              <section className="bg-white  mt-4 rounded-md shadow-md p-2">
                {/* 카테고리 */}
                <div className="py-4 px-4">
                  <InputFormTitle title="Category" required={true} />
                  <div className="mt-1 ">
                    <div className="">
                      {category.map((item, index) => (
                        <RadioBtn category={item} key={index} />
                      ))}
                    </div>
                  </div>
                </div>
                {/* 사이즈 */}
                <div className="py-4 px-4">
                  <InputFormTitle title="Size" />
                  <div className="mt-1 ">
                    <input
                      type="text"
                      name="size"
                      placeholder="Separate with a comma. ex) S, M, L"
                      className="w-full border-b"
                      value={useSelector(
                        (state) => state.createProduct.newProduct.size
                      )}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                {/* 컬러 */}
                <div className="py-4 px-4">
                  <InputFormTitle title="Color" />
                  <div className="mt-1 ">
                    <input
                      type="text"
                      name="color"
                      placeholder="Separate with a comma. ex) Black, Red, Blue"
                      className="w-full border-b"
                      value={useSelector(
                        (state) => state.createProduct.newProduct.color
                      )}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </section>
            </div>
            {/* 우측 상단 컨텐츠 : 이미지 업로드 */}
            <section className="flex flex-col w-1/2 h-[472px] bg-white rounded-md p-2 shadow-md">
              <div className="flex px-4 py-4">
                <InputFormTitle title="Image" required={true} />
                <label className="flex self-center text-blue-500 font-bold ml-auto">
                  <span className="mr-1 self-center cursor-pointer">Add</span>{" "}
                  <FaPlus className="self-center" />
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={handleFileChange}
                    hidden
                  />
                </label>
              </div>
              <div className="grow mx-4 mb-4 h-full">
                <label>
                  {!image ? (
                    <img
                      src={defaultImage}
                      className="rounded-md cursor-pointer w-[452.19px] h-[384px]"
                    />
                  ) : (
                    <img
                      className="rounded-md cursor-pointer w-[452.19px] h-[384px]"
                      src={URL.createObjectURL(image)}
                    />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={handleFileChange}
                    hidden
                  />
                </label>
              </div>
            </section>
          </section>
          {/* 하단 컨텐츠 : 상품 설명 */}
          <section className="bg-white mt-4 rounded-md shadow-md">
            <div className="py-4 px-4">
              <InputFormTitle title="Description" />
              <div className="flex mt-1 ">
                <textarea
                  className="w-full h-20 border outline-none resize-none"
                  name="description"
                  value={useSelector(
                    (state) => state.createProduct.newProduct.description
                  )}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
          </section>
          <SaveAndCancelBtn
            newData={newProduct}
            requireOptions={requireOptions}
            mutation={mutation}
            addBtnText={"Add Product"}
          />
        </div>
      </div>
    </div>
  );
}
