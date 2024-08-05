import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  resetNewProduct,
  setNewProduct,
} from "../../../slice/productsManagement/createProductSlice";
import uploadFileToS3 from "./uploadFunc";
import { alert_productUploadSuccess } from "../../../alerts/success";
import { alert_productUploadCancel } from "../../../alerts/warning";

const CREATE_PRODUCT_URL = process.env.REACT_APP_CREATE_PRODUCT_URL;

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

    axios
      .post(CREATE_PRODUCT_URL, newProduct)
      .then(function (response) {
        alert_productUploadSuccess().then(dispatch(resetNewProduct()));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCancel = () => {
    // Alert
    alert_productUploadCancel().then((result) => {
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
