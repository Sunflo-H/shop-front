import React from "react";

export default function List({ list }) {
  const liStyle = "w-24 md:w-36  mt-2 font-semibold text-xs ";
  const spanStyle =
    "border-b-2 border-transparent hover:border-black cursor-pointer";
  return (
    <ul className="mr-20 shrink-0">
      <h1 className="font-bold">{list[0]}</h1>
      {list.map(
        (text, index) =>
          index !== 0 && (
            <li className={liStyle} key={index}>
              <span className={spanStyle}>{text}</span>
            </li>
          )
      )}
    </ul>
  );
}
