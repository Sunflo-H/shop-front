import React, { useState } from "react";
import { imageUploadAndGetUrl } from "../../api/cloudinary";
import UploadButton from "../../components/ui/UploadButton";
import useProducts from "../../hooks/useProducts";
import Input_Category from "../../components/shop/main/UploadProduct/Input_category";
import Input_file from "../../components/shop/main/UploadProduct/Input_file";
import Input_text from "../../components/shop/main/UploadProduct/Input_text";
import Input_size from "../../components/shop/main/UploadProduct/Input_size";
import Input_color from "../../components/shop/main/UploadProduct/Input_color";
import { v4 as uuid } from "uuid";
import Swal from "sweetalert2";
import RadioBtn from "../../components/ProductManagement/main/UploadProduct/RadioBtn";
import { FaPlus } from "react-icons/fa";

const category = ["Men", "Women", "Accessories", "Shoes"];
const productDetails = ["title", "description"];
const size = ["S", "M", "L", "XL"];
const color = ["Black", "Red", "Green", "Blue", "Yellow"];
const inputStyle = "p-4 outline-none border border-gray-300 my-1";

export default function UploadProduct() {
  const [isUploading, setIsUploading] = useState();
  const [success, setSuccess] = useState();
  const [file, setFile] = useState();
  const [imageSrc, setImageSrc] = useState("/images/default-placeholder.png");
  const [product, setProduct] = useState({
    category: "",
    title: "",
    price: "",
    description: "",
    stock: "",
    size: [],
    color: [],
  });
  const { uploadProduct } = useProducts(product?.category);

  const handleFileChange = (e) => {
    const { name, value, files } = e.target;
    console.log(name);
    console.log(value);
    console.log(files);

    if (name === "file") {
      setFile(files[0]);
      return;
    }
    setProduct({ ...product, [name]: value });
  };

  const handleUploadProduct = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    const PRODUCT_STATUS = {
      SALE: "Sale",
      SOLD_OUT: "Sold Out",
      HIDE: "Hide",
    };
    const id = uuid();
    const imageUrl = await imageUploadAndGetUrl(file);
    const productToUpload = {
      ...product,
      id,
      imageUrl,
      price: Number(product.price),
      stock: Number(product.stock),
      size: product.size.split(","),
      color: product.color.split(","),
      status: PRODUCT_STATUS.SALE, // [Sale, Sold Out, Hide]
    };

    try {
      uploadProduct.mutate(
        { productToUpload },
        {
          onSuccess: () => {
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
          },
          onError: (error) => {
            console.log(error);
          },
        }
      );
    } finally {
      setIsUploading(false);

      Swal.fire({
        icon: "success",
        title: "✅ Upload Successfully",
        confirmButtonColor: "#222",
      });
    }
  };

  return (
    <div className="max-w-screen-lg w-screen m-auto">
      <div className="">
        <div className="flex gap-6 ">
          <div className="w-1/2">
            {/* 좌측 상단 첫번째 컨텐츠 : 상품명, 가격 */}
            <section className="bg-white rounded-md shadow-md p-2">
              <div className=" py-4 px-4">
                <div className="font-bold">
                  Product Name{" "}
                  <span className="font-normal text-sm mx-1 text-blue-500">
                    ( require )
                  </span>
                </div>
                <div className="grow text-start border-b mt-1">
                  <input
                    type="text"
                    className="w-full outline-none"
                    placeholder="ex) Man's Suit"
                  />
                </div>
              </div>
              <div className=" py-4 px-4">
                <div className="font-bold">
                  Price
                  <span className="font-normal text-sm mx-1 text-blue-500">
                    ( require )
                  </span>
                </div>
                <div className="flex border-b mt-1 ">
                  <input
                    type="Number"
                    className="w-full outline-none"
                    placeholder="100"
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
                  <span className="font-normal text-sm mx-1 text-blue-500">
                    ( require )
                  </span>
                </div>
                <div className="mt-1 ">
                  <div className="">
                    {category.map((item, index) => (
                      <RadioBtn value={item} name="category" key={index} />
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
                    placeholder="Separate with a comma. ex) S, M, L"
                    className="w-full border-b"
                  />
                </div>
              </div>
              {/* 컬러 */}
              <div className="py-4 px-4">
                <div className="font-bold">Color</div>
                <div className="mt-1 ">
                  <input
                    type="text"
                    placeholder="Separate with a comma. ex) Black, Red, Blue"
                    className="w-full border-b"
                  />
                </div>
              </div>
            </section>
          </div>
          {/* 우측 상단 컨텐츠 : 이미지 업로드 */}
          <section className="w-1/2  bg-white rounded-md p-2 shadow-md">
            <div className="flex px-4 py-4">
              <div className="font-bold">Image</div>
              <label className="flex self-center text-blue-500 font-bold ml-auto">
                <span className="mr-1 self-center cursor-pointer">Add</span>{" "}
                <FaPlus className="self-center" />
                <input
                  type="file"
                  accept="image/*"
                  name="file"
                  required
                  onChange={handleFileChange}
                  hidden
                />
              </label>
            </div>
            <div className="mx-4 mb-4">
              <label>
                {file ? (
                  <img
                    className="rounded-md cursor-pointer"
                    src={URL.createObjectURL(file)}
                  />
                ) : (
                  <img src={imageSrc} className="rounded-md cursor-pointer" />
                )}

                <input
                  type="file"
                  accept="image/*"
                  name="file"
                  required
                  onChange={handleFileChange}
                  hidden
                />
              </label>
            </div>
          </section>
        </div>
        <div>하단</div>
      </div>

      {/* <form className="flex flex-col px-12" onSubmit={handleUploadProduct}>
        <div className="flex mb-4 gap-2 font-bold">
          {category.map((item) => {
            return (
              <Input_Category
                category={item}
                product={product}
                setProduct={setProduct}
                key={item}
              />
            );
          })}
        </div>

        <Input_file handleFileChange={handleFileChange} />

        {productDetails.map((item) => {
          return (
            <Input_text
              attribute={item}
              value={product[item]}
              handleFileChange={handleFileChange}
              key={item}
            />
          );
        })}
        <input
          className={inputStyle}
          type="number"
          name="price"
          value={product?.price}
          placeholder="price"
          required
          onChange={handleFileChange}
        />
        <input
          className={inputStyle}
          type="number"
          name="stock"
          value={product?.stock}
          placeholder="Stock"
          required
          onChange={handleFileChange}
        />

        <input
          className={inputStyle}
          type="text"
          name="size"
          value={product?.size}
          placeholder="Size (Separate with commas(,))"
          required
          onChange={handleFileChange}
        />
        <input
          className={inputStyle}
          type="text"
          name="color"
          value={product?.color}
          placeholder="Colors (Separate with commas(,))"
          required
          onChange={handleFileChange}
        />

        <UploadButton
          text={isUploading ? "Uploading..." : "Products Upload"}
          disabled={isUploading}
        ></UploadButton>
      </form> */}
    </div>
  );
}
