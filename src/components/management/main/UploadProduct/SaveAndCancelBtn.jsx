import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  resetNewProduct,
  setNewProduct,
} from "../../../../slice/management/createProductSlice";
import { alert_productUploadSuccess } from "../../../../alerts/success";
import { alert_productUploadCancel } from "../../../../alerts/warning";
import { alert_requireError } from "../../../../alerts/error";
import uploadFileToS3 from "../../../../api/aws_uploadToS3";

const CREATE_PRODUCT_URL = process.env.REACT_APP_CREATE_PRODUCT_URL;

export default function SaveAndCancelBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newProduct = useSelector((state) => state.createProduct.newProduct);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allFormComplete = requireCheck(newProduct);
    if (allFormComplete) {
      try {
        const fileUrl = await uploadFileToS3(newProduct.image);
        const uploadProduct = { ...newProduct, image: fileUrl };
        upload(uploadProduct);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleCancel = () => {
    alert_productUploadCancel().then((result) => {
      if (result.isConfirmed) {
        navigate(-1);
      }
    });
  };

  const upload = (uploadProduct) => {
    axios
      .post(CREATE_PRODUCT_URL, uploadProduct)
      .then(function (response) {
        alert_productUploadSuccess().then(dispatch(resetNewProduct()));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const requireCheck = (uploadProduct) => {
    const requireOptions = ["name", "price", "category", "image"];
    const emptyOptions = [];
    let status = true;

    requireOptions.forEach((item) => {
      if (!uploadProduct[item] || uploadProduct[item] === "") {
        status = false;
        item = item.charAt(0).toUpperCase() + item.slice(1);
        emptyOptions.push(item);
      }
    });

    emptyOptions.length !== 0 && alert_requireError(emptyOptions);
    return status;
  };

  return (
    <div className="flex justify-center ml-auto gap-3 mt-4 border">
      <button
        type="submit"
        className="px-6 py-2 text-white font-bold  bg-blue-600 cursor-pointer rounded-md
        hover:bg-blue-500"
        onClick={handleSubmit}
      >
        Add Product
      </button>
      <div
        className="px-6 py-2 text-white font-bold bg-gray-800 cursor-pointer rounded-md
        hover:bg-gray-700"
        onClick={handleCancel}
      >
        Cancel
      </div>
    </div>
  );
}
