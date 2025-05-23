import React from "react";

const BannerScreen2xl = ({ text1, text2 }) => {
  return (
    <div className="flex items-center h-full animate-marquee">
      <div className="flex text-center ">
        <div className="w-60">{text1}</div>
        <div className="w-60">{text2}</div>
      </div>
      <div className="flex text-center ">
        <div className="w-60">{text1}</div>
        <div className="w-60">{text2}</div>
      </div>
      <div className="flex text-center ">
        <div className="w-60">{text1}</div>
        <div className="w-60">{text2}</div>
      </div>
      <div className="flex text-center ">
        <div className="w-60">{text1}</div>
        <div className="w-60">{text2}</div>
      </div>
      <div className="flex text-center ">
        <div className="w-60">{text1}</div>
        <div className="w-60">{text2}</div>
      </div>
    </div>
  );
};

export default function AnimatedTextBanner({ text1, text2 }) {
  return (
    // banner container
    <div className="flex hidden bg-black h-7 border font-bold text-[12px] text-white md:block">
      <BannerScreen2xl text1={text1} text2={text2} />
      <BannerScreen2xl text1={text1} text2={text2} />
    </div>
  );
}
