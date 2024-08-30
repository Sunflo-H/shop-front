import React, { useEffect, useRef, useState } from "react";
import SelectBox from "../ui/SelectBox";
import { FaChevronLeft } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  setDetailData,
} from "../../../../slice/management/detailModalSlice";
import _ from "lodash";
import uploadFileToS3 from "../../../../api/aws_uploadToS3";
import axios from "axios";
import { alert_productUploadSuccess } from "../../../../alerts/success";
import { fetchProduct } from "../../../../slice/management/productManagementSlice";

const UPDATE_PRODUCT_URL = process.env.REACT_APP_UPDATE_PRODUCT_URL;

const categoryOptions = ["Man", "Woman", "Shoes", "Accessory"];
const statusOptions = ["Sale", "Sold Out", "Hide"];

export default function DetailModal() {
  const dispatch = useDispatch();
  const { isOpen, detailData } = useSelector((state) => state.detailModal);
  const { activeCategory, activeStatus, page, limit } = useSelector(
    (state) => state.productManagement
  );
  const modalRef = useRef();

  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [status, setStatus] = useState(null);
  const [isChanged, setIsChanged] = useState(false);
  const { name, price, color, size, description, _id } = product || {};
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    setProduct(detailData);
    setCategory(detailData.category);
    setStatus(detailData.status);
    setImage(detailData.image);
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
    const category = e.target.value;
    setCategory(category);
    setProduct({
      ...product,
      category,
    });
  };

  const handleStatusChange = (e) => {
    const status = e.target.value;
    setStatus(status);
    setProduct({
      ...product,
      status,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImage(detailData.image); // 파일 변경 취소하면 원래 이미지 보여준다.
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      setImageFile(file);
      setProduct({
        ...product,
        image: "just change check", // 렌더링 하지 않고 이미지가 변화되었는지에만 사용한다.
      });
    };
    reader.readAsDataURL(file);
  };

  const handleTextChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleExitClick = () => {
    dispatch(closeModal());
  };

  const handleUpdateClick = async (e) => {
    try {
      let productToUpdate;
      const isImageChange = !!imageFile;
      if (isImageChange) {
        const imageUrl = await uploadFileToS3(imageFile);
        productToUpdate = {
          ...product,
          image: imageUrl,
          category,
          status,
        };
      } else {
        productToUpdate = {
          ...product,
          category,
          status,
        };
      }
      update(productToUpdate);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const update = (productToUpdate) => {
    axios
      .post(UPDATE_PRODUCT_URL + "/" + _id, productToUpdate)
      .then(function (response) {
        alert_productUploadSuccess().then(() => {
          dispatch(setDetailData(productToUpdate));
          dispatch(
            fetchProduct({
              category: activeCategory,
              status: activeStatus,
              page,
              limit,
            })
          );
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (_.isEqual(detailData, product)) {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  }, [detailData, product]);

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
          onClick={handleUpdateClick}
        >
          <RxUpdate className="" />
          Update
        </div>
      </header>
      <main className="mt-12 px-4">
        <div className="border-b border-blue-200">
          <div className="text-sm text-blue-400">Product Name</div>
          <input
            className="bg-transparent w-full outline-none focus:bg-blue-100"
            value={name}
            name="name"
            onChange={handleTextChange}
          />
        </div>
        <div className="border-b border-blue-200 mt-3">
          <div className="text-sm text-blue-400 ">Price</div>
          <input
            type="number"
            className="bg-transparent w-full outline-none focus:bg-blue-100"
            value={price}
            name="price"
            onChange={handleTextChange}
          />
        </div>
        <div className="mt-3">
          <div className="text-sm text-blue-400">Category</div>
          <SelectBox
            options={categoryOptions}
            value={category}
            onChange={handleCategoryChange}
          />
        </div>
        <div className="mt-3">
          <div className="text-sm text-blue-400">Status</div>
          <SelectBox
            options={statusOptions}
            value={status}
            onChange={handleStatusChange}
          />
        </div>
        <div className="border-b border-blue-200 mt-3">
          <div className="text-sm text-blue-400">Color</div>
          <input
            className="bg-transparent w-full outline-none focus:bg-blue-100"
            value={color}
            name="color"
            onChange={handleTextChange}
          />
        </div>
        <div className="border-b border-blue-200 mt-3">
          <div className="text-sm text-blue-400 ">Size</div>
          <input
            className="bg-transparent w-full outline-none focus:bg-blue-100"
            value={size}
            name="size"
            onChange={handleTextChange}
          />
        </div>
        <div className="flex flex-col border-b border-blue-200 mt-3">
          <div className="text-sm text-blue-400">Description</div>
          <textarea
            className="bg-transparent w-full h-full outline-none resize-none focus:bg-blue-100"
            value={description}
            name="description"
            onChange={handleTextChange}
          />
        </div>
        <div className="border-b border-blue-200 mt-3  ">
          <div className="text-sm text-blue-400">Image</div>

          <label>
            <img
              className="rounded-md w-full h-96 border-blue-200 border cursor-pointer"
              src={image}
            />

            <input
              type="file"
              accept="image/*"
              name="image"
              required
              onChange={handleImageChange}
              hidden
            />
          </label>
        </div>
      </main>
    </div>
  );
}
