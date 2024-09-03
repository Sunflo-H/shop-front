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
import { alert_productUploadSuccess } from "../../../../alerts/success";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../../../../api/userApi";

const roleOptions = ["User", "Admin"];

export default function DetailModal() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { isOpen, detailData } = useSelector((state) => state.detailModal);
  const modalRef = useRef();

  const [updatedUser, setUpdatedUser] = useState(null); // 업데이트 내용이 담겨있는 상품데이터
  const [selectBox, setSelectBox] = useState({ role: "" });
  const [isChanged, setIsChanged] = useState(false);

  const { email, name, phone, role } = updatedUser || {};

  useEffect(() => {
    setUpdatedUser(detailData);
    setSelectBox({
      category: detailData.category,
      status: detailData.status,
    });
  }, [detailData]);

  useEffect(() => {
    // 모달 외부를 클릭시 닫히는 이벤트 핸들러
    const handleOutsideClick = (e) => {
      if (!isOpen) return;

      if (
        !e.target.classList.contains("user-list-item") && // product-list-item이 아니고
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
    mutationFn: updateUser,
    onSuccess: (data) => {
      alert_productUploadSuccess().then(() => {
        dispatch(setDetailData(data));
        queryClient.invalidateQueries(["users"]);
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
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleTextChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpdatedUser({
      ...updatedUser,
      [name]: value,
    });
  };

  const handleUpdateClick = async (e) => {
    try {
      let userToUpdate;

      userToUpdate = {
        ...updatedUser,
        role: selectBox.role,
      };
      mutation.mutate(userToUpdate);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (_.isEqual(detailData, updatedUser)) {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  }, [detailData, updatedUser]);

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
          <div className="text-sm text-blue-400">E-mail</div>
          <input
            className="bg-transparent w-full outline-none focus:bg-blue-100"
            value={email || 0}
            name="email"
            onChange={handleTextChange}
          />
        </div>
        <div className="border-b border-blue-200 mt-3">
          <div className="text-sm text-blue-400">Name</div>
          <input
            className="bg-transparent w-full outline-none focus:bg-blue-100"
            value={name || 0}
            name="name"
            onChange={handleTextChange}
          />
        </div>
        <div className="border-b border-blue-200 mt-3">
          <div className="text-sm text-blue-400">phone</div>
          <input
            className="bg-transparent w-full outline-none focus:bg-blue-100"
            value={phone || 0}
            name="phone"
            onChange={handleTextChange}
          />
        </div>
        <div className="mt-3">
          <div className="text-sm text-blue-400">Role</div>
          <SelectBox
            options={roleOptions}
            value={selectBox.role || 0}
            name="role"
            onChange={handleSelectBoxChange}
          />
        </div>
      </main>
    </div>
  );
}
