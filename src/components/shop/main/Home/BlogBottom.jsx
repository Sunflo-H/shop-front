import React from "react";
import Button from "../../../ui/Button";
import BlogBottomImage from "./BlogBottomImage";
import useCategoryNavigation from "../../../../hooks/useCategoryNavigation";

export default function BlogBottom() {
  const bottomImages = [
    "https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_296,w_270/v1679413298/shoppy/blog8_ewqvt6.jpg",
    "https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_296,w_270/v1679413297/shoppy/blog6_g5hgqh.jpg",
    "https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_296,w_270/v1679413299/shoppy/blog7_znvyes.jpg",
    "https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_296,w_270/v1679413297/shoppy/blog5_ynq6j0.jpg",
    "https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_296,w_270/v1679413298/shoppy/blog9_vmczy4.jpg",
    "https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_296,w_270/v1679413298/shoppy/blog10_cw41yu.jpg",
  ];
  const { handleGoToMen } = useCategoryNavigation();

  return (
    <>
      <div className="flex flex-wrap lg:w-3/4">
        {bottomImages.map((image, i) => {
          return <BlogBottomImage image={image} key={i} />;
        })}
        <div className="m-auto lg:hidden mt-10">
          <Button text="Meet our Community" handleClick={handleGoToMen} />
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center w-1/4 
                    m-auto lg:m-0"
      >
        <div className="relative">
          <div className="absolute -top-5 -left-10 mr-auto ml-6 font-bold">
            MEETS CREATIVITY
          </div>
          <span className="absolute top-11 -left-16 font-bold -rotate-90  ">
            WHERE STYLE
          </span>
          <div className="flex items-end w-52 h-52 border-4 border-black mb-2 p-4 text-2xl font-bold">
            <h1>
              The <br />
              Adonis <br /> Collective
            </h1>
          </div>
        </div>
        <div className="hidden lg:block mt-8">
          <Button text="Meet our Community" onClick={handleGoToMen} />
        </div>
      </div>
    </>
  );
}
