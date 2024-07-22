import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/manage" className="flex self-center text-lg font-bold px-4 ">
      상품 관리
    </Link>
  );
}
