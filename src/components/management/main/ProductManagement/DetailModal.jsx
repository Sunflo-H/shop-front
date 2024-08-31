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
import { useMutation, useQueryClient } from "@tanstack/react-query";

const UPDATE_PRODUCT_URL = process.env.REACT_APP_UPDATE_PRODUCT_URL;

const categoryOptions = ["Man", "Woman", "Shoes", "Accessory"];
const statusOptions = ["Sale", "Sold Out", "Hide"];

export default function DetailModal() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { isOpen, detailData } = useSelector((state) => state.detailModal);
  // const { activeCategory, activeStatus, page, limit } = useSelector(
  //   (state) => state.productManagement
  // );
  const modalRef = useRef();

  const [product, setProduct] = useState(null); // 업데이트 후 상품데이터
  const [selectBox, setSelectBox] = useState({ category: "", status: "" });
  const [isChanged, setIsChanged] = useState(false);
  const [image, setImage] = useState(null); // 보여지는 이미지
  const [imageFile, setImageFile] = useState(null); // 이미지 파일 정보

  const { name, price, color, size, description, _id } = product || {};

  useEffect(() => {
    setProduct(detailData);
    setSelectBox({
      category: detailData.category,
      status: detailData.status,
    });
    setImage(detailData.image);
  }, [detailData]);

  useEffect(() => {
    // 모달 외부를 클릭시 닫히는 이벤트 핸들러
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

  const mutation = useMutation({
    mutationFn: update,
    onSuccess: (data) => {
      alert_productUploadSuccess().then(() => {
        dispatch(setDetailData(data));
        queryClient.invalidateQueries(["products"]);
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleSelectBoxChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setSelectBox({
      ...selectBox,
      [name]: value,
    });
    setProduct({ ...product, [name]: value });
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

  const handleUpdateClick = async (e) => {
    try {
      let productToUpdate;
      const isImageChange = !!imageFile;
      if (isImageChange) {
        const imageUrl = await uploadFileToS3(imageFile);
        productToUpdate = {
          ...product,
          image: imageUrl,
          category: selectBox.category,
          status: selectBox.status,
        };
      } else {
        productToUpdate = {
          ...product,
          category: selectBox.category,
          status: selectBox.status,
        };
      }
      mutation.mutate(productToUpdate);
    } catch (err) {
      console.error(err);
    }
  };

  async function update(productToUpdate) {
    const url = UPDATE_PRODUCT_URL + "/" + _id;
    const response = await axios.post(url, productToUpdate);
    return response.data;
  }

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
          onClick={() => dispatch(closeModal())}
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
            value={name || "something"}
            name="name"
            onChange={handleTextChange}
          />
        </div>
        <div className="border-b border-blue-200 mt-3">
          <div className="text-sm text-blue-400 ">Price</div>
          <input
            type="number"
            className="bg-transparent w-full outline-none focus:bg-blue-100"
            value={price || "something"}
            name="price"
            onChange={handleTextChange}
          />
        </div>
        <div className="mt-3">
          <div className="text-sm text-blue-400">Category</div>
          <SelectBox
            options={categoryOptions}
            value={selectBox.category || "something"}
            name="category"
            onChange={handleSelectBoxChange}
          />
        </div>
        <div className="mt-3">
          <div className="text-sm text-blue-400">Status</div>
          <SelectBox
            options={statusOptions}
            value={selectBox.status || "something"}
            name="status"
            onChange={handleSelectBoxChange}
          />
        </div>
        <div className="border-b border-blue-200 mt-3">
          <div className="text-sm text-blue-400">Color</div>
          <input
            className="bg-transparent w-full outline-none focus:bg-blue-100"
            value={color || "something"}
            name="color"
            onChange={handleTextChange}
          />
        </div>
        <div className="border-b border-blue-200 mt-3">
          <div className="text-sm text-blue-400 ">Size</div>
          <input
            className="bg-transparent w-full outline-none focus:bg-blue-100"
            value={size || "something"}
            name="size"
            onChange={handleTextChange}
          />
        </div>
        <div className="flex flex-col border-b border-blue-200 mt-3">
          <div className="text-sm text-blue-400">Description</div>
          <textarea
            className="bg-transparent w-full h-full outline-none resize-none focus:bg-blue-100"
            value={description || "something"}
            name="description"
            onChange={handleTextChange}
          />
        </div>
        <div className="border-b border-blue-200 mt-3  ">
          <div className="text-sm text-blue-400">Image</div>

          <label>
            <img
              className="rounded-md w-full h-96 border-blue-200 border cursor-pointer"
              src={image || "something"}
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
