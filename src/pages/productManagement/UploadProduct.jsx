import React, { useEffect, useRef, useState } from "react";
import RadioBtn from "../../components/ProductManagement/main/UploadProduct/RadioBtn";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import RequireOption from "../../components/ProductManagement/main/UploadProduct/RequireOption";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  setImageFile,
  setNewProduct,
} from "../../slice/productsManagement/createProductSlice";

const productDetails = ["title", "description"];
const size = ["S", "M", "L", "XL"];
const color = ["Black", "Red", "Green", "Blue", "Yellow"];
const inputStyle = "p-4 outline-none border border-gray-300 my-1";
const GET_CATEGORY_URL = process.env.REACT_APP_GET_CATEGORY_URL;

export default function UploadProduct() {
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [imageSrc, setImageSrc] = useState("/images/default-placeholder.png");
  const [selectCategory, setSelectCategory] = useState("man");

  const { data, isSuccess } = useQuery({
    queryKey: ["categoryId"],
    queryFn: () => axios.get(GET_CATEGORY_URL),
  });
  const categoryData = isSuccess ? data.data : [];

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const key = name;
    const value = files[0];
    setFile(value);
    // dispatch(setNewProduct({ key, value }));
    dispatch(setImageFile(files[0]));
  };

  const handleCategoryChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const category = e.target.dataset.category;
    console.log(value);

    setSelectCategory(category);
    dispatch(setNewProduct({ key, value }));
  };

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    dispatch(setNewProduct({ key, value }));
  };

  return (
    <div className="max-w-screen-lg w-screen m-auto">
      <div>
        {/* 상단 컨텐츠 */}
        <section className="flex gap-6">
          <div className="w-1/2">
            {/* 좌측 상단 첫번째 컨텐츠 : 상품명, 가격 */}
            <section className="bg-white rounded-md shadow-md p-2">
              <div className=" py-4 px-4">
                <div className="font-bold">
                  Product Name <RequireOption />
                </div>
                <div className="grow text-start border-b mt-1">
                  <input
                    type="text"
                    name="name"
                    className="w-full outline-none"
                    placeholder="ex) Man's Suit"
                    value={useSelector(
                      (state) => state.createProduct.newProduct.name
                    )}
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className=" py-4 px-4">
                <div className="font-bold">
                  Price
                  <RequireOption />
                </div>
                <div className="flex border-b mt-1 ">
                  <input
                    type="Number"
                    name="price"
                    className="w-full outline-none"
                    placeholder="100"
                    required
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
                <div className="font-bold">
                  Category
                  <RequireOption />
                </div>
                <div className="mt-1 ">
                  <div className="">
                    {categoryData.map((item, index) => (
                      <RadioBtn
                        category={item.name}
                        id={item._id}
                        name="category"
                        selectCategory={selectCategory}
                        onChange={handleCategoryChange}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* 사이즈 */}
              <div className="py-4 px-4">
                <div className="font-bold">Size</div>
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
                <div className="font-bold">Color</div>
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
              <div className="font-bold">
                Image <RequireOption />
              </div>
              <label className="flex self-center text-blue-500 font-bold ml-auto">
                <span className="mr-1 self-center cursor-pointer">Add</span>{" "}
                <FaPlus className="self-center" />
                <input
                  type="file"
                  accept="image/*"
                  name="imageUrl"
                  required
                  onChange={handleFileChange}
                  hidden
                />
              </label>
            </div>
            <div className="grow mx-4 mb-4 h-full">
              <label>
                {file ? (
                  <img
                    className="rounded-md cursor-pointer w-[452.19px] h-[384px]"
                    src={URL.createObjectURL(file)}
                  />
                ) : (
                  <img
                    src={imageSrc}
                    className="rounded-md cursor-pointer w-[452.19px] h-[384px]"
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  name="imageUrl"
                  required
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
            <div className="font-bold">Description</div>
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
      </div>
    </div>
  );
}
