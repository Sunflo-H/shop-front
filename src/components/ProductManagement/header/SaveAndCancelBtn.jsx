import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SaveAndCancelBtn() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // FormData 객체를 쉽게 출력하기 위해 Object.fromEntries를 사용
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted with data:", data);

    const name = formData.get("name");
    console.log(name);
    // 상태에 폼 데이터를 저장
    // setFormData(data);
    // formRef.submit();
  };

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
    <div className="flex ml-auto gap-3">
      <div
        className="border-gray-300 border px-6 py-1 cursor-pointer text-md ml-auto self-center"
        onClick={handleCancelClick}
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
