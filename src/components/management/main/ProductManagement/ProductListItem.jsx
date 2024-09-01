import React, { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  setIdList,
  setIsSelectMode,
} from "../../../../slice/management/productManagementSlice";
import {
  setDetailData,
  closeModal,
  openModal,
} from "../../../../slice/management/detailModalSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProducts } from "../../../../api/productApi";
import Swal from "sweetalert2";
import { alert_deleteProduct } from "../../../../alerts/warning";
import _ from "lodash";

export default function ProductListItem({
  product,
  setCheckboxList,
  checkboxList,
  index,
}) {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { isOpen, detailData } = useSelector((state) => state.detailModal);
  const { idList } = useSelector((state) => state.productManagement);
  const { name, price, category, status, createdAt, _id } = product;

  const mutation = useMutation({
    mutationFn: deleteProducts,
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  useEffect(() => {
    const isChecked = Object.values(checkboxList).some((checked) => checked);
    isChecked
      ? dispatch(setIsSelectMode(true))
      : dispatch(setIsSelectMode(false));
  }, [checkboxList]);

  const handleRemoveClick = () => {
    alert_deleteProduct().then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        mutation.mutate([_id]);
      }
    });
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setCheckboxList((prev) =>
        prev.map((isChecked, i) => {
          if (i === index) return !isChecked;
          return isChecked;
        })
      );
      dispatch(setIdList(_.union(idList, [_id])));
    } else {
      setCheckboxList((prev) =>
        prev.map((isChecked, i) => {
          if (i === index) return !isChecked;
          return isChecked;
        })
      );
      dispatch(setIdList(_.without(idList, _id)));
    }
  };

  const handleListItemClick = (product) => {
    if (!isOpen) {
      dispatch(openModal());
      dispatch(setDetailData(product));
      return;
    } else if (isOpen) {
      if (detailData._id === product._id) {
        dispatch(closeModal());
        dispatch(setDetailData({}));
      } else {
        dispatch(setDetailData(product));
      }
    }
  };

  return (
    <li className="flex py-2 border-b border-dashed	">
      <div className="w-20 flex justify-center items-center ">
        <label
          className="relative flex items-center rounded-full cursor-pointer"
          htmlFor="checkbox"
        >
          <input
            type="checkbox"
            className={`peer relative h-4 w-4 cursor-pointer appearance-none rounded border-2 border-blue-300 checked:border-blue-400 checked:bg-blue-400 `}
            id="checkbox"
            checked={checkboxList[index]}
            onChange={handleCheckboxChange}
          />
          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
      </div>
      <div className="w-60 pl-[2px] text-bold">
        <span
          onClick={() => handleListItemClick(product)}
          className="product-list-item  cursor-pointer hover:font-bold"
        >
          {name}
        </span>
      </div>
      <div className="w-40 pl-[2px] ">{price}</div>
      <div className="w-40 pl-[2px] ">{category}</div>
      <div className="w-40 pl-[2px] ">{status}</div>
      <div className="w-40 pl-[2px] ">{createdAt}</div>
      <div className="flex items-center px-6 ml-4 gap-5 border-l-[2px] border-lightblue">
        <FaPen
          className="product-list-item cursor-pointer text-deepblue hover:text-blue-500"
          onClick={() => handleListItemClick(product)}
        />
        <FaTrash
          className="cursor-pointer text-deepblue hover:text-red-500"
          onClick={handleRemoveClick}
        />
      </div>
    </li>
  );
}
