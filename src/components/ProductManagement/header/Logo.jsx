import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/manage"
      className="flex self-center top-1/2 text-xl font-bold ml-4"
    >
      Product Management
    </Link>
  );
}
