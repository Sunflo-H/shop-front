import React from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

export default function ChartHeader({ title, text, count, percent }) {
  return (
    <div>
      <div className={`font-bold `}>{title}</div>
      <div className="flex justify-between mt-2">
        <div className="flex items-end gap-1">
          <span className=" text-3xl font-bold">{count?.num}</span>
          <span className="text-lg font-bold">{count?.unit}</span>
          <span className="opacity-60 ml-1">{text}</span>
        </div>
        {asd(percent)}
      </div>
    </div>
  );
}

function asd(percent) {
  if (!percent) return;
  let result;
  percent > 0
    ? (result = (
        <div className="flex items-end font-bold text-green-500 text-lg gap-1">
          <FaArrowCircleUp className="mb-1.5" />
          {percent}%
        </div>
      ))
    : (result = (
        <div className="flex items-end font-bold text-red-500 text-lg gap-1">
          <FaArrowCircleDown className="mb-1.5" />
          {percent}%
        </div>
      ));
  return result;
}
