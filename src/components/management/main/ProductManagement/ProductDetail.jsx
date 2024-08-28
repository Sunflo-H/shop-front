import React, { useEffect, useState } from "react";
import SelectBox from "../ui/SelectBox";
import { IoArrowBackOutline } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import { FaSignOutAlt } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";

const categoryOptions = ["Man", "Woman", "Shoes", "Accessory"];
const statusOptions = ["Sale", "Sold Out", "Hide"];

export default function ProductDetail({ isShowDetail, product }) {
  const {
    name,
    price,
    category,
    status,
    createdAt,
    _id,
    image,
    color,
    size,
    description,
  } = product || {};
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeStatus, setActiveStatus] = useState(null);

  useEffect(() => {
    setActiveCategory(category);
  }, [product]);

  const handleCategoryChange = (e) => {
    setActiveCategory(e.target.value);
  };

  const handleStatusChange = (e) => {
    setActiveStatus(e.target.value);
  };

  const product_origin = { ...product };
  const [updatedProduct, setUpdatedProduct] = useState(null);

  const [isChanged, setIsChanged] = useState(false);
  return (
    <div
      className={`absolute top-0 w-96 h-screen bg-[#f7f7f7] border-l-2 border-[#e0e0e0] 
        transition-all shadow-2xl overflow-scroll
        ${isShowDetail ? "right-0" : "-right-96"}`}
    >
      <header className="fixed flex justify-between items-center w-96 h-10 bg-blue-200 px-4">
        <FaChevronLeft className="text-xl cursor-pointer " />
        <div
          className={`flex items-center px-4 py-1 text-white  rounded-md cursor-pointer gap-1 
           ${
             isChanged
               ? "bg-blue-500 hover:bg-blue-400"
               : "bg-gray-500 pointer-events-none"
           } `}
        >
          <RxUpdate className="" />
          Update
        </div>
      </header>
      <main className="mt-12 px-4">
        <div className="border-b border-blue-200">
          <div className="text-sm text-blue-400">Product Name</div>
          <input className="bg-transparent w-full" value={name} />
        </div>
        <div className="border-b border-blue-200 mt-3">
          <div className="text-sm text-blue-400">Price</div>
          <input className="bg-transparent  w-full" value={price} />
        </div>
        <div className="mt-3">
          <div className="text-sm text-blue-400">Category</div>
          <SelectBox
            options={categoryOptions}
            value={activeCategory}
            onChange={handleCategoryChange}
          />
        </div>
        <div className="mt-3">
          <div className="text-sm text-blue-400">Status</div>
          <SelectBox
            options={statusOptions}
            value={activeStatus}
            onChange={handleStatusChange}
          />
        </div>
        <div className="border-b border-blue-200 mt-3">
          <div className="text-sm text-blue-400">Color</div>
          <input className="bg-transparent w-full" value={color} />
        </div>
        <div className="border-b border-blue-200 mt-3">
          <div className="text-sm text-blue-400">Size</div>
          <input className="bg-transparent w-full" value={size} />
        </div>
        <div className="border-b border-blue-200 mt-3">
          <div className="text-sm text-blue-400">Description</div>
          <textarea
            className="bg-transparent w-full outline-none resize-none"
            value={description}
          />
        </div>
        <div className="border-b border-blue-200 mt-3  ">
          <div className="text-sm text-blue-400">Image</div>
          <img src={image} className="rounded-md w-full h-96" />
        </div>
      </main>
    </div>
  );
}
