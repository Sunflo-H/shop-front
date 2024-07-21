import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SaveAndCancelBtn() {
  const navigate = useNavigate();
  const handleCancelClick = () => {
    Swal.fire({
      title: "정말 취소하시겠습니까?",
      text: "입력한 내용이 사라집니다.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "예",
      cancelButtonText: "아니요",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(-1);
      }
    });
  };

  return (
    <div className="flex ml-auto gap-4">
      <div
        className=" bg-blue-500 text-white px-6 py-1 cursor-pointer text-md ml-auto"
        onClick={handleCancelClick}
      >
        취소
      </div>
      <div className=" bg-blue-500 text-white px-6 py-1 cursor-pointer text-md ml-auto">
        저장
      </div>
    </div>
  );
}
