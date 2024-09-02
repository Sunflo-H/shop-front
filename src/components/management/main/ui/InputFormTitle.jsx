import React from "react";
import RequireOption from "../UploadProduct/RequireOption";

export default function InputFormTitle({ title, required }) {
  return (
    <div className="font-bold">
      {title}
      {required && <RequireOption />}
    </div>
  );
}
