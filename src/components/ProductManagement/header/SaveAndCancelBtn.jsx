import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { setNewProduct } from "../../../slice/productsManagement/createProductSlice";
import uploadFileToS3 from "./uploadFunc";

const CREATE_PRODUCT_URL = process.env.REACT_APP_CREATE_PRODUCT_URL;
console.log(CREATE_PRODUCT_URL);

export default function SaveAndCancelBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newProduct = useSelector((state) => state.createProduct.newProduct);
  const imageFile = useSelector((state) => state.createProduct.fileUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const fileUrl = await uploadFileToS3(imageFile);
      console.log("File uploaded successfully:", fileUrl);
      dispatch(setNewProduct({ key: "imageUrl", value: fileUrl }));
    } catch (error) {
      console.error("Error uploading file:", error);
    }

    console.log(newProduct);
    axios
      .post(CREATE_PRODUCT_URL, newProduct)
      .then(function (response) {
        console.log(response);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCancel = () => {
    Swal.fire({
      title: " Are you sure you want to cancel?",
      text: "Your entered information will be lost",
      icon: "warning",
      showCancelButton: true,
      // confirmButtonColor: "#3085d6",
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No, I will not cancel.",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(-1);
      }
    });
  };

  return (
    <div className="flex ml-auto gap-3">
      <div
        className="border-gray-300 border px-6 py-1 cursor-pointer text-md ml-auto self-center"
        onClick={handleCancel}
      >
        취소
      </div>
      <button
        type="submit"
        className=" bg-blue-500 border border-transparent text-white px-6 py-1 cursor-pointer text-md ml-auto flex self-center"
        onClick={handleSubmit}
      >
        저장
      </button>
    </div>
  );
}
