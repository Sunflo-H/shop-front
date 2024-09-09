import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function Progress() {
  const { email, password, info } = useSelector(
    (state) => state.userRegister.progress
  );

  return (
    <div>
      <div className="relative flex justify-between w-9/12 m-auto mt-6">
        {/* progress line */}
        <div className="absolute border-2 border-gray-300 w-full mt-3.5 z-0"></div>
        <div
          className={`absolute border-2 border-black  mt-3.5 z-10 
            ${email || "w-0"} 
            ${email && "w-1/2"} 
            ${password && "w-full"} `}
        ></div>

        {/* progress circle */}
        {email ? <Circle_complete /> : <Circle_active number={1} />}

        {email ? (
          password ? (
            <Circle_complete />
          ) : (
            <Circle_active number={2} />
          )
        ) : (
          <Circle_none number={2} />
        )}
        {password ? (
          info ? (
            <Circle_complete />
          ) : (
            <Circle_active number={3} />
          )
        ) : (
          <Circle_none number={3} />
        )}
      </div>
      <div className="flex justify-between mt-1 pl-[42px] ">
        <div className={`text-sm mt-1 font-bold text-black `}>Email</div>
        <div
          className={`text-sm mt-1 -ml-2 ${
            email ? "font-bold text-black " : "text-gray-400"
          }`}
        >
          Password
        </div>
        <div
          className={`text-sm mt-1  mr-12 ${
            password ? "font-bold text-black " : "text-gray-400"
          }`}
        >
          Info
        </div>
      </div>
    </div>
  );
}

function Circle_active({ number }) {
  return (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-bold z-20">
      {number}
    </div>
  );
}

function Circle_complete() {
  return (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-bold z-20">
      <FaCheck />
    </div>
  );
}

function Circle_none({ number }) {
  return (
    <div className="flex items-center justify-center w-8 h-8 border-[3px] border-gray-300 rounded-full bg-white text-gray-300 font-bold z-20">
      {number}
    </div>
  );
}
