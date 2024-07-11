import React from "react";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";

export default function Pen() {
  return (
    <Link
      to="/products/new"
      className="hidden md:block border-b border-transparent hover:border-black h-full pt-6 pb-3 cursor-pointer"
    >
      <BsFillPencilFill />
    </Link>
  );
}
