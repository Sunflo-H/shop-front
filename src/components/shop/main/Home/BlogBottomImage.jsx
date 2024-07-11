import React from "react";

export default function BlogBottomImage({ image }) {
  return (
    <div
      className="basis-1/3 
                px-1 py-1 h-48
                lg:px-0 lg:py-0 lg:pr-8 lg:pb-6 lg:h-80"
    >
      <img className="w-full h-full " src={image} alt="" />
    </div>
  );
}
