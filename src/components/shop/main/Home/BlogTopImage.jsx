import React from "react";

export default function BlogTopImage({ info }) {
  const { url, title, text } = info;
  return (
    <div className="basis-1/4 cursor-pointer flex md:block gap-4">
      <img className="mb-4 w-1/3 h-1/3 md:w-auto md:h-auto" src={url} alt="" />
      <div className="mt-6 md:mt-0">
        <h1 className="text-xl mb-4">{title}</h1>
        <span className="font-bold border-b-2 border-black pb-1">{text}</span>
      </div>
    </div>
  );
}
