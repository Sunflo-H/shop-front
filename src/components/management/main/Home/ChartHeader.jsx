import React from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

export default function ChartHeader({ title, text, count, percent }) {
  const { num, unit } = count;
  return (
    <div>
      <div className="font-bold">{title}</div>
      <div className="flex justify-between">
        <div className="flex items-end gap-1">
          <span className=" text-3xl font-bold">{num}</span>
          <span className="text-lg font-bold">{unit}</span>
          <span className="opacity-60 ml-1">{text}</span>
        </div>
        {asd(percent)}
      </div>
    </div>
  );
}

function asd(percent) {
  let result;
  percent > 0
    ? (result = (
        <div className="flex items-end font-bold text-green-500 text-lg gap-1">
          <FaArrowCircleUp className="mb-1.5" />
          <div>{percent}%</div>
        </div>
      ))
    : (result = (
        <div className="flex font-bold text-red-500 text-lg gap-1">
          {" "}
          <FaArrowCircleDown />
          {percent}
        </div>
      ));
  return result;
}
