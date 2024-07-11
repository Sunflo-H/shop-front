import React from "react";
import Swal from "sweetalert2";

export default function UploadButton({ text, disabled }) {
  return (
    <button
      className="w-40 p-4 m-auto mt-10 bg-black text-white font-bold"
      disabled={disabled}
    >
      {text}
    </button>
  );
}
