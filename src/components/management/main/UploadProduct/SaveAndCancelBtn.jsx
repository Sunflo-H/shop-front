import axios from "axios";
import React, { useState } from "react";
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

export default function SaveAndCancelBtn({
  newData,
  requireOptions,
  mutation,
  addBtnText,
}) {
  const navigate = useNavigate();

  const handleCancel = () => {
    alert_productUploadCancel().then((result) => {
      if (result.isConfirmed) {
        navigate(-1);
      }
    });
  };

  const handleAddClick = async (e) => {
    e.preventDefault();
    const allFormComplete = requireCheck(requireOptions, newData);
    if (allFormComplete)
      if (!newData.image) mutation.mutate(newData);
      else {
        try {
          const fileUrl = await uploadFileToS3(newData.image);
          const uploadProduct = { ...newData, image: fileUrl };
          mutation.mutate(uploadProduct);
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      }
  };

  const requireCheck = (requireOptions, newData) => {
    const errorOptions = [];
    let status = true;

    requireOptions.forEach((item) => {
      if (!newData[item]) {
        status = false;
        item = item.charAt(0).toUpperCase() + item.slice(1);
        errorOptions.push(item);
      }
    });

    errorOptions.length !== 0 && alert_requireError(errorOptions);
    return status;
  };

  return (
    <div className="flex justify-center ml-auto gap-3 mt-4 ">
      <button
        type="submit"
        className="px-6 py-2 text-white font-bold  bg-blue-600 cursor-pointer rounded-md
        hover:bg-blue-500"
        onClick={handleAddClick}
      >
        {addBtnText}
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
