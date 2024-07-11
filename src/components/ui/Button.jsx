import React from "react";

export default function Button({ text, onClick, color, isAni, num, slider }) {
  if (slider) {
    return (
      <span
        className={`cursor-pointer
        opacity-0
        ${num !== slider && "animate-hide"}
        ${num === slider && isAni && "animate-btn-show "}`}
        onClick={onClick}
      >
        <span className="bg-black text-white px-4 py-2.5  md:p-4 md:px-8 text-sm">
          {text}
        </span>
        <span className="ml-0.5 pl-0.5 py-2.5 md:pl-1 md:pr-0 md:py-4 bg-black text-sm"></span>
      </span>
    );
  }

  if (color === "white") {
    return (
      <span className={`cursor-pointer`} onClick={onClick}>
        <span className="bg-black text-white p-4 px-8 text-sm border border-white">
          {text}
        </span>
        <span className="ml-0.5 pl-1 py-4 bg-black text-sm border border-white"></span>
      </span>
    );
  }

  return (
    <span className={`cursor-pointer`} onClick={onClick}>
      <span className="bg-black text-white px-4 py-2.5  md:p-4 md:px-8 text-sm">
        {text}
      </span>
      <span className="ml-0.5 pl-0.5 py-2.5 md:pl-1 md:pr-0 md:py-4 bg-black text-sm"></span>
    </span>
  );
}
