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

const category = ["Men", "Women", "Accessories", "Shoes"];
const productDetails = ["title", "description"];
const size = ["S", "M", "L", "XL"];
const color = ["Black", "Red", "Green", "Blue", "Yellow"];
const inputStyle = "p-4 outline-none border border-gray-300 my-1";

export default function UploadProduct() {
  const [checkedItems, setCheckedItems] = useState({
    S: false,
    M: false,
    L: false,
    XL: false,
  });
  console.log(checkedItems);
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
            <section className="bg-white  mt-4 rounded-md shadow-md">
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
                    {category.map((item) => (
                      <RadioBtn value={item} name="category" />
                    ))}
                  </div>
                </div>
              </div>
              {/* 사이즈 */}
              <div className="py-4 px-4">
                <div className="font-bold">Size</div>
                <div className="flex gap-4">
                  <div
                    className="px-2 bg-red-500 w-auto px-4"
                    onClick={() =>
                      setCheckedItems({ ...checkedItems, S: !checkedItems.S })
                    }
                  >
                    S
                  </div>
                  <div className="px-2 bg-red-500 w-auto px-4">M</div>
                  <div className="px-2 bg-red-500 w-auto px-4">L</div>
                  <div className="px-2 bg-red-500 w-auto px-4">XL</div>
                </div>
              </div>
              {/* 컬러 */}
              <div className="py-4 px-4">
                <div className="font-bold">Color</div>
                <div className="mt-1 ">
                  <input
                    type="text"
                    placeholder="Separate with a comma. ex) S, M, L"
                    className="w-full border-b"
                  />
                </div>
              </div>
            </section>
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
    </div>
  );
}
