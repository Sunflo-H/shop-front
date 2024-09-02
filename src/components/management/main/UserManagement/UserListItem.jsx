import React, { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

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
import {
  setCheckboxList,
  setIdList,
  setIsSelectMode,
} from "../../../../slice/management/userManagementSlice";

export default function UserListItem({ user, index }) {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { isOpen, detailData } = useSelector((state) => state.detailModal);
  const { idList } = useSelector((state) => state.productManagement);
  const { email, name, role, phone, signUpDate, _id } = user;

  // 삭제
  const mutation = useMutation({
    mutationFn: deleteProducts,
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const { checkboxList } = useSelector((state) => state.userManagement);

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
    dispatch(
      setCheckboxList(
        checkboxList.map((isChecked, i) => {
          if (i === index) return !isChecked;
          return isChecked;
        })
      )
    );
    if (e.target.checked) {
      dispatch(setIdList(_.union(idList, [_id])));
    } else {
      dispatch(setIdList(_.without(idList, _id)));
    }
  };

  const handleListItemClick = (user) => {
    if (!isOpen) {
      dispatch(openModal());
      dispatch(setDetailData(user));
      return;
    } else if (isOpen) {
      if (detailData._id === user._id) {
        dispatch(closeModal());
        dispatch(setDetailData({}));
      } else {
        dispatch(setDetailData(user));
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
            checked={checkboxList[index] || false}
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
          onClick={() => handleListItemClick(user)}
          className="user-list-item  cursor-pointer hover:font-bold"
        >
          {email}
        </span>
      </div>
      <div className="w-40 pl-[2px] ">{name}</div>
      <div className="w-32 pl-[2px] ">{role}</div>
      <div className="w-48 pl-[2px] ">{phone}</div>
      <div className="w-40 pl-[2px] ">{signUpDate}</div>
      <div className="flex items-center px-6 ml-4 gap-5 border-l-[2px] border-lightblue">
        <FaPen
          className="user-list-item cursor-pointer text-deepblue hover:text-blue-500"
          onClick={() => handleListItemClick(user)}
        />
        <FaTrash
          className="cursor-pointer text-deepblue hover:text-red-500"
          onClick={handleRemoveClick}
        />
      </div>
    </li>
  );
}
