import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/manage"
      className="flex self-center justify-center text-lg font-bold w-[150px] mx-6 "
    >
      Management
    </Link>
  );
}
