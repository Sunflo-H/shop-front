import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center text-3xl md:mr-6 xl:mr-20 pt-3 pb-3 md:pb-2 cursor-pointer"
    >
      <h1>Adonis</h1>
    </Link>
  );
}
