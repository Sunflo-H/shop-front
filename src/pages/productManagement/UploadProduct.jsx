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

const category = ["Men", "Women", "Accessories", "Shoes"];
const productDetails = ["title", "description"];
const size = ["S", "M", "L", "XL"];
const color = ["Black", "Red", "Green", "Blue", "Yellow"];
const inputStyle = "p-4 outline-none border border-gray-300 my-1";

export default function UploadProduct() {
  const [isUploading, setIsUploading] = useState();
  const [success, setSuccess] = useState();
  const [file, setFile] = useState();
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;

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
    <section className="text-center max-w-screen-lg w-screen m-auto">
      <div className="">
        {/* 상단 컨텐츠 - 상품명 가격 카테고리 | 이미지 업로드 */}
        <div className="flex gap-6 h-[300px]">
          <div className="w-1/2 bg-white rounded-md">
            <ul>
              <li className="flex min-h-[3rem] border-black border">
                <div className="w-1/4 border-r border-black ">
                  <p className="line relative top-1/2 -translate-y-1/2 ">
                    <b>Name</b>
                  </p>
                </div>
                <div className="grow text-start mx-4">
                  <input
                    type="text"
                    placeholder="product name"
                    className="w-1/2 my-2 h-8 border border-black"
                  ></input>
                </div>
              </li>
              <li className="flex min-h-[3rem] border-black border-b border-l border-r">
                <div className="w-1/4 border-r border-black">
                  <p className="line relative top-1/2 -translate-y-1/2 ">
                    <b>Price</b>
                  </p>
                </div>
                <div className="grow text-start mx-4">
                  <input type="number" className=" my-2 h-8 mr-1"></input>$
                </div>
              </li>
              <li className="flex min-h-[3rem] border-black border-b border-l border-r">
                <div className="w-1/4 border-r border-black">
                  <p className="relative top-1/2 -translate-y-1/2 ">
                    <b>Category</b>
                  </p>
                </div>
                <div className="grow text-start mx-4 my-2 ">
                  <div className="relative top-1/2 -translate-y-1/2">
                    <label>
                      <input type="radio" name="category" value="Man" />
                      <span className="mr-6 ml-2">Man</span>
                    </label>
                    <label>
                      <input type="radio" name="category" value="Woman" />
                      <span className="mr-6 ml-2">Woman</span>
                    </label>
                    <label>
                      <input type="radio" name="category" value="Shoes" />
                      <span className="mr-6 ml-2">Shoes</span>
                    </label>
                    <label>
                      <input type="radio" name="category" value="Accessory" />
                      <span className="mr-6 ml-2">Accessory</span>
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-1/2  bg-white rounded-md ">이미지 업로드</div>
        </div>
        <div>하단</div>
      </div>
      {file && (
        <img
          className="w-80 h-96 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="local file"
        />
      )}

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

        <Input_file handleChange={handleChange} />

        {productDetails.map((item) => {
          return (
            <Input_text
              attribute={item}
              value={product[item]}
              handleChange={handleChange}
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
          onChange={handleChange}
        />
        <input
          className={inputStyle}
          type="number"
          name="stock"
          value={product?.stock}
          placeholder="Stock"
          required
          onChange={handleChange}
        />

        <input
          className={inputStyle}
          type="text"
          name="size"
          value={product?.size}
          placeholder="Size (Separate with commas(,))"
          required
          onChange={handleChange}
        />
        <input
          className={inputStyle}
          type="text"
          name="color"
          value={product?.color}
          placeholder="Colors (Separate with commas(,))"
          required
          onChange={handleChange}
        />

        <UploadButton
          text={isUploading ? "Uploading..." : "Products Upload"}
          disabled={isUploading}
        ></UploadButton>
      </form> */}
    </section>
  );
}
