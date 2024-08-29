import React, { useEffect, useRef, useState } from "react";
import SelectBox from "../ui/SelectBox";
import { FaChevronLeft } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../../slice/management/detailModalSlice";
import _ from "lodash";

const categoryOptions = ["Man", "Woman", "Shoes", "Accessory"];
const statusOptions = ["Sale", "Sold Out", "Hide"];

export default function DetailModal() {
  const dispatch = useDispatch();
  const { isOpen, detailData } = useSelector((state) => state.detailModal);
  const modalRef = useRef();

  const [updatedProduct, setUpdatedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeStatus, setActiveStatus] = useState(null);
  const [isChanged, setIsChanged] = useState(false);
  const { name, price, category, status, image, color, size, description } =
    updatedProduct || {};
  useEffect(() => {
    setUpdatedProduct(detailData);
    setActiveCategory(category);
    setActiveStatus(status);
  }, [detailData]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!isOpen) return;

      if (
        !e.target.classList.contains("product-list-item") && // product-list-item이 아니고
        !modalRef.current.contains(e.target) // 모달 내부도 아니라면
      ) {
        dispatch(closeModal());
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleCategoryChange = (e) => {
    setActiveCategory(e.target.value);
  };

  const handleStatusChange = (e) => {
    setActiveStatus(e.target.value);
  };

  const handleExitClick = () => {
    dispatch(closeModal());
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpdatedProduct({
      ...updatedProduct,
      [name]: value,
    });
  };

  useEffect(() => {
    if (_.isEqual(detailData, updatedProduct)) {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  }, [detailData, updatedProduct]);

  return (
    <div
      ref={modalRef}
      className={`absolute top-0 w-96 h-screen pb-4 bg-[#f7f7f7] border-l-2 border-[#e0e0e0] 
        transition-all shadow-2xl overflow-scroll
        ${isOpen ? "right-0" : "-right-96"}
        `}
    >
      <header className="fixed flex justify-between items-center w-96 h-10 bg-blue-200 px-4">
        <FaChevronLeft
          className="text-xl cursor-pointer"
          onClick={handleExitClick}
        />
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
          <input
            className="bg-transparent w-full"
            value={name}
            name="name"
            onChange={handleInputChange}
          />
        </div>
        <div className="border-b border-blue-200 mt-3">
          <div className="text-sm text-blue-400">Price</div>
          <input
            type="number"
            className="bg-transparent w-full"
            value={price}
            name="price"
            onChange={handleInputChange}
          />
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
          <input
            className="bg-transparent w-full"
            value={color}
            name="color"
            onChange={handleInputChange}
          />
        </div>
        <div className="border-b border-blue-200 mt-3">
          <div className="text-sm text-blue-400">Size</div>
          <input
            className="bg-transparent w-full"
            value={size}
            name="size"
            onChange={handleInputChange}
          />
        </div>
        <div className="border-b border-blue-200 mt-3">
          <div className="text-sm text-blue-400">Description</div>
          <textarea
            className="bg-transparent w-full outline-none resize-none"
            value={description}
            name="description"
            onChange={handleInputChange}
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
